<?php
/**
 * Plugin Name: Colby Student clubs
 * Description: A single page app for displaying Colby's student clubs
 * Author: John Watkins, Colby Communications
 */

/* Add the rewrite tag for category-name. */
add_action( 'init', function() {
	add_rewrite_tag( '%category-name%', '([^/]+)' );
} );

/* Add rewrite rule for club categories. */
add_action( 'init', function() {
	add_rewrite_rule(
		'(student-organizations)/([^/]+)$',
		'index.php?pagename=$matches[1]&category-name=$matches[2]',
		'top'
	);
} );

/* Add shortcode that uses the category-name match. */
add_action( 'init', function() {
	add_shortcode( 'student-organizations', function( $atts, $content ) {
		$term_string = $atts['categories'] ? " data-categories={$atts['categories']}" : '';

		return "<div data-student-clubs{$term_string}>$content</div>";
	} );
} );

add_action( 'wp_enqueue_scripts', function() {
	global $post;

	if ( has_shortcode( $post->post_content, 'student-organizations' ) ) {
		$dist = plugin_dir_url( __FILE__ ) . 'dist';
		$min = PROD === true ? '.min' : '';

		$package_json = json_decode( file_get_contents( __DIR__ . '/package.json' ) )
			?: (object) [ 'version' => '1.0.1' ];

		wp_enqueue_style(
			'student-clubs',
			"$dist/colby-wp-react-student-clubs$min.css",
			['colby-bootstrap'],
			$package_json->version
		);
		wp_enqueue_script(
			'student-clubs',
			"$dist/colby-wp-react-student-clubs$min.js",
			['react', 'react-dom', 'lodash', 'prop-types'],
			$package_json->version,
			true
		);
	}
} );
