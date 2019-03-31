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
	const BLOCK_ASSET_HANDLE = 'wp-student-clubs-block';
	const BLOCK_TYPE         = 'colbycomms/wp-student-clubs';

	/**
	 * Everything in the plugin should run after the init hook.
	 */
	protected function init() {
		add_action( 'init', [ $this, 'init_callback' ] );
	}

	/**
	 * Sets up WP hooks.
	 */
	public function init_callback() {
		// Callbacks on the init hook.
		$this->register_assets();
		$this->register_block();
	}

	/**
	 * Registers frontend assets for public screens.
	 */
	public function register_assets() {
		wp_register_style(
			self::ASSET_HANDLE,
			sprintf( '%sassets/dist/%s.css', PLUGIN_URL, self::ASSET_HANDLE ),
			[ 'wp-components' ],
			filemtime( sprintf( '%sassets/dist/%s.css', PLUGIN_PATH, self::ASSET_HANDLE ) )
		);

		wp_register_script(
			self::ASSET_HANDLE,
			sprintf( '%sassets/dist/%s.js', PLUGIN_URL, self::ASSET_HANDLE ),
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
			filemtime( sprintf( '%sassets/dist/%s.js', PLUGIN_PATH, self::ASSET_HANDLE ) ),
			true
		);

		wp_register_script(
			self::BLOCK_ASSET_HANDLE,
			sprintf( '%sassets/dist/%s.js', PLUGIN_URL, self::BLOCK_ASSET_HANDLE ),
			[
				'wp-blocks',
				'wp-components',
				'wp-dom-ready',
				'wp-editor',
				'wp-i18n',
			],
			filemtime( sprintf( '%sassets/dist/%s.js', PLUGIN_PATH, self::BLOCK_ASSET_HANDLE ) ),
			true
		);
	}

	/**
	 * Registers the editor block.
	 */
	public function register_block() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
			self::BLOCK_TYPE,
			[
				'editor_script'   => self::BLOCK_ASSET_HANDLE,
				'script'          => self::ASSET_HANDLE,
				'render_callback' => [ App_Root::get_instance(), 'render' ],
			]
		);
	}
}
