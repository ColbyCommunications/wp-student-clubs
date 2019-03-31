<?php
/**
 * Helper functions
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

/**
 * Echoes the data object that will be accessible in JS.
 */
function the_app_data_attributes() {
	$attributes = App_Root::get_instance()->get_data_attributes();

	foreach ( $attributes as $key => $value ) {
		printf( ' data-%s="%s"', esc_attr( $key ), esc_attr( $value ) );
	}
}

/**
 * Echoes the content of the app root.
 */
function the_app_root_content() {
	echo wp_kses_post( App_Root::get_instance()->get_content() );
}
