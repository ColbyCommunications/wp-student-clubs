<?php
/**
 * Handles generation of the app root page.
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

use JohnWatkins0\WPSingleton\Singleton;

/**
 * App_Root class
 */
class App_Root {
	use Singleton;

	const SHORTCODE = 'student-organizations';

	/**
	 * Whether the shortcode has been rendered.
	 *
	 * @var boolean
	 */
	private static $rendered = false;

	/**
	 * Configuration instance.
	 *
	 * @var null|App_Root_Config
	 */
	private $config;

	/**
	 * Content inside the app root.
	 *
	 * @var null|string
	 */
	private $content;

	/**
	 * Whether the shortcode should be rendered.
	 *
	 * @var null|boolean
	 */
	private $should_render;

	/**
	 * Sets up hooks.
	 */
	protected function init() {
		add_shortcode( self::SHORTCODE, [ $this, 'render' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'maybe_set_up_assets' ] );
	}

	/**
	 * Returns whether the shortcode should render.
	 */
	public function should_render() {
		global $post;

		if ( is_null( $this->should_render ) ) {
			if ( ! is_singular( [ 'post', 'page' ] ) ) {
				$this->should_render = false;
			} else {
				$this->should_render = has_shortcode( $post->post_content, self::SHORTCODE )
					|| has_block( Student_Clubs::BLOCK_TYPE, $post );
			}
		}

		return $this->should_render;
	}

	/**
	 * Sets up assets and localization if the shortcode should render.
	 */
	public function maybe_set_up_assets() {
		if ( ! $this->should_render() ) {
			return;
		}

		wp_enqueue_script( Student_Clubs::ASSET_HANDLE );
		wp_enqueue_style( Student_Clubs::ASSET_HANDLE );
	}

	/**
	 * Provides data to send to JS.
	 *
	 * @return array
	 */
	public function get_data_attributes() {
		return [
			'endpoint'            => $this->config->get( App_Root_Config::ENDPOINT_KEY ),
			'categories-endpoint' => $this->config->get( App_Root_Config::CATEGORIES_ENDPOINT_KEY ),
			'categories'          => $this->config->get( App_Root_Config::INCLUDED_CATEGORIES_KEY ),
		];
	}

	/**
	 * Provides the app root content.
	 *
	 * @return string
	 */
	public function get_content() {
		return $this->content;
	}

	/**
	 * Several values shouldn't be set until the render method actually runs.
	 *
	 * @param array  $options Options for the app root.
	 * @param string $content App root content.
	 */
	public function do_render_side_effects( $options, $content ) {
		self::$rendered = true;

		if ( ! is_array( $options ) ) {
			$options = [];
		}
		$this->config = new App_Root_Config( $options );

		if ( isset( $options['content'] ) ) { // WP 5.0 content is in the options array.
			$this->content = $options['content'];
		} else {
			$this->content = $content; // Pre-5.0 content is everything inside the shortcode.
		}
	}

	/**
	 * Renders the app root. This is the callback for both the shortcode and the editor block.
	 *
	 * @param array  $options Options for the app root.
	 * @param string $content App root content.
	 * @return string HTML string.
	 */
	public function render( $options, $content = '' ) {
		if ( ! $this->should_render ) {
			return '';
		}

		if ( self::$rendered ) {
			return '';
		}

		$this->do_render_side_effects( $options, $content );

		$template = sprintf( '%stemplates/app-root.php', PLUGIN_PATH );
		if ( is_readable( $template ) ) {
			ob_start();
			include $template; // phpcs:ignore
			return ob_get_clean();
		}

		return '';
	}
}
