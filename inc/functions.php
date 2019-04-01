<?php
/**
 * Helper functions
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

/**
 * Echoes the data attributes on the app root.
 */
function the_app_data_attributes() {
	$attributes = App_Root::get_instance()->get_data_attributes();
	?>
	data-endpoint="<?php echo esc_attr( $attributes['endpoint'] ); ?>"
	data-categories-endpoint="<?php echo esc_attr( $attributes['categories-endpoint'] ); ?>"
	data-categories=<?php echo esc_attr( $attributes['categories'] ); ?>
		<?php
}

/**
 * Echoes the content of the app root.
 */
function the_app_root_content() {
	echo wp_kses_post( App_Root::get_instance()->get_content() );
}
