<?php
/**
 * Plugin Name: Colby Student Clubs
 * Description: A single-page display of Colby's student clubs.
 * Author: John Watkins, Colby Communications
 * 
 * @package colbycomms/wp-student-clubs
 */

namespace ColbyComms\StudentClubs;

define( __NAMESPACE__ . '\\PROD', true );
define( __NAMESPACE__ . '\\POST_TYPE', 'student-organization' );

/* Add the rewrite tag for category-name. */
add_action(
	'init', function() {
		add_rewrite_tag( '%category-name%', '([^/]+)' );
	}
);

/* Add rewrite rule for club categories. */
add_action(
	'init', function() {
		add_rewrite_rule(
			'(' . POST_TYPE . ')/([^/]+)$',
			'index.php?pagename=$matches[1]&category-name=$matches[2]',
			'top'
		);
	}
);

/* Add shortcode that uses the category-name match. */
add_action(
	'init', function() {
		add_shortcode(
			'student-organizations', function( $atts, $content ) {
				$atts = $atts ?: [];
				$endpoint = $atts['endpoint'] ?? get_rest_url( '/wp-json/wp/v2/' . POST_TYPE );
				$categories_endpoint = $atts['categories-endpoint'] ?? get_rest_url( '/wp-json/wp/v2/categories/' );
				$term_string = ! empty( $atts['categories'] ) ? " data-categories={$atts['categories']}" : '';
				$endpoint_string = ' data-endpoint="' . esc_url( $endpoint ) . '"'; 
				$categories_endpoint_string = ' data-categories-endpoint="' . esc_url( $categories_endpoint ) . '"';

				return "<div data-student-clubs{$term_string}{$endpoint_string}{$categories_endpoint_string}>$content</div>";
			}
		);
	}
);

add_action(
	'wp_enqueue_scripts', function() {
		global $post;

		if ( has_shortcode( $post->post_content, 'student-organizations' ) ) {
			$dist = plugin_dir_url( __FILE__ ) . 'dist';
			$min = PROD === true ? '.min' : '';

			$package_json = json_decode( file_get_contents( __DIR__ . '/package.json' ) )
			?: (object) [
				'version' => '1.0.1',
			];

			wp_enqueue_style(
				'student-clubs',
				"$dist/wp-student-clubs$min.css",
				[],
				$package_json->version
			);
			wp_enqueue_script(
				'student-clubs',
				"$dist/wp-student-clubs$min.js",
				[],
				$package_json->version,
				true
			);
		}
	}
);
