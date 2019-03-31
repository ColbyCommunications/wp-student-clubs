<?php
/**
 * Plugin Name: Colby Student Clubs
 * Description: A single-page display of Colby's student clubs.
 * Author: John Watkins, Colby Communications
 * Version: 2.0
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

define( 'PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Set up PHP autoloader for WordPress file naming conventions.
 */
\JohnWatkins0\WPAutoload\register_wp_autoload( __NAMESPACE__, PLUGIN_PATH . 'inc' );

require_once plugin_dir_path( __FILE__ ) . 'inc/functions.php';
Student_Clubs::get_instance();
App_Root::get_instance();
Student_Organization::get_instance();

