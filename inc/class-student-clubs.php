<?php
/**
 * Class Student Clubs
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

use JohnWatkins0\WPSingleton\Singleton;

/**
 * Student_Clubs class
 */
class Student_Clubs {
	use Singleton;

	const ASSET_HANDLE       = 'wp-student-clubs';
	const ADMIN_ASSET_HANDLE = 'wp-student-clubs-block';
	const BLOCK_TYPE         = 'colbycomms/wp-student-clubs';

	/**
	 * Everything in the plugin should run after the init hook.
	 */
	protected function init() {
		add_action( 'init', [ $this, 'wp_init' ] );
	}

	/**
	 * Runs functions on the init hook and adds callbacks for other hooks.
	 */
	public function wp_init() {
		$this->register_assets();
		$this->register_block();
	}

	/**
	 * Registers all scripts and styles for the plugin.
	 */
	public function register_assets() {
		$css_file_template = '%sassets/dist/%s.css';
		$js_file_template  = '%sassets/dist/%s.js';

		wp_register_style(
			self::ASSET_HANDLE,
			sprintf( $css_file_template, PLUGIN_URL, self::ASSET_HANDLE ),
			[ 'wp-components' ],
			filemtime( sprintf( $css_file_template, PLUGIN_PATH, self::ASSET_HANDLE ) )
		);

		wp_register_script(
			self::ASSET_HANDLE,
			sprintf( $js_file_template, PLUGIN_URL, self::ASSET_HANDLE ),
			[
				'wp-api-fetch',
				'wp-components',
				'wp-compose',
				'wp-data',
				'wp-dom-ready',
				'wp-element',
				'wp-html-entities',
				'wp-url',
			],
			filemtime( sprintf( $js_file_template, PLUGIN_PATH, self::ASSET_HANDLE ) ),
			true
		);

		wp_register_script(
			self::ADMIN_ASSET_HANDLE,
			sprintf( $js_file_template, PLUGIN_URL, self::ADMIN_ASSET_HANDLE ),
			[
				'wp-blocks',
				'wp-components',
				'wp-dom-ready',
				'wp-editor',
				'wp-i18n',
			],
			filemtime( sprintf( $js_file_template, PLUGIN_PATH, self::ADMIN_ASSET_HANDLE ) ),
			true
		);
	}

	/**
	 * Registers the editor block.
	 */
	public function register_block() {
		/**
		 * The register_block_type function is not available pre-5.0.
		 */
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
			self::BLOCK_TYPE,
			[
				'editor_script'   => self::ADMIN_ASSET_HANDLE,
				'script'          => self::ASSET_HANDLE,
				'render_callback' => [ App_Root::get_instance(), 'render' ],
			]
		);
	}
}
