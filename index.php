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
	add_shortcode( 'student-organizations', function( $_, $content ) {
		$term_string = get_term_string();

		return "<div data-student-clubs{$term_string}>$content</div>";
	} );
} );

function get_term_string() {
	$term_string = '';

	$category_name = get_query_var( 'category-name' );
	if ( ! $category_name ) {
		return '';
	}

	$url = "http://www.colby.edu/studentactivities/wp-json/wp/v2/categories?slug={$category_name}";
	$rest_response = get_transient( $url );

	if ( ! $rest_response ) {
		$rest_response = wp_remote_get( $url );
		set_transient( $url, $rest_response, DAY_IN_SECONDS );
	}

	if ( ! $rest_response || ! is_array( $rest_response ) || ! $rest_response['body'] ) {
		return '';
	}

	$body = json_decode( $rest_response['body'] );

	return " data-category={$body[0]->id}";
}

add_action( 'wp_enqueue_scripts', function() {
	global $post;

	if ( has_shortcode( $post->post_content, 'student-organizations' ) ) {
		$dist = plugin_dir_url( __FILE__ ) . '/dist';
		$min = PROD === true ? '.min' : '';

		wp_enqueue_style( 'student-clubs', "$dist/colby-wp-react-student-clubs$min.css" );
		wp_enqueue_script(
			'student-clubs',
			"$dist/colby-wp-react-student-clubs$min.js",
			['react', 'react-dom', 'lodash', 'prop-types']
		);
	}
} );
