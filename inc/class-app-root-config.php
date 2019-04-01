<?php
/**
 * Handles validation of the configuration options passed for the display of
 * the feature on the front end of the site, whether via a shortcode or an
 * editor block.
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

/**
 * App_Root_Config class
 */
class App_Root_Config {
	const ENDPOINT_KEY            = 'endpoint';
	const CATEGORIES_ENDPOINT_KEY = 'categories_endpoint';
	const INCLUDED_CATEGORIES_KEY = 'included_categories';

	/**
	 * The passed-in options array.
	 *
	 * @var array
	 */
	private $options;

	/**
	 * The URL of the endpoint to fetch club data from.
	 *
	 * @var null|string
	 */
	private $endpoint;

	/**
	 * The URL of the endpoint to fetch category data from.
	 *
	 * @var null|string
	 */
	private $categories_endpoint;

	/**
	 * Comma-separated list of categories to include.
	 *
	 * @var null|string
	 */
	private $included_categories;

	/**
	 * Class constructor
	 *
	 * @param array $options App root configuration options.
	 */
	public function __construct( array $options = [] ) {
		$this->options = $options;
		$this->set_post_endpoint();
		$this->set_categories_endpoint();
		$this->set_included_categories();
	}

	/**
	 * Gets a value from one of the whitelisted fields.
	 *
	 * @param string $field The field name.
	 * @return mixed The field value.
	 */
	public function get( string $field ) {
		switch ( $field ) {
			case self::ENDPOINT_KEY:
			case self::CATEGORIES_ENDPOINT_KEY:
			case self::INCLUDED_CATEGORIES_KEY:
				return $this->$field;
		}
	}

	/**
	 * Provides the endpoint to fetch posts from.
	 */
	private function set_post_endpoint() {
		if ( ! empty( $this->options['endpoint'] ) ) {
			$this->endpoint = $this->options['endpoint'];
			return;
		}

		$this->endpoint = rest_url( 'wp/v2/' . Student_Organization::POST_TYPE );
	}

	/**
	 * Provides the endpoint to fetch categories from.
	 */
	private function set_categories_endpoint() {
		if ( ! empty( $this->options['categories-endpoint'] ) ) {
			$this->categories_endpoint = $this->options['categories-endpoint'];
			return;
		}

		$this->categories_endpoint = rest_url( 'wp/v2/categories/' );
	}

	/**
	 * Sets the comma-separated list of categories to include.
	 */
	private function set_included_categories() {
		if ( empty( $this->options['categories'] ) ) {
			$this->included_categories = '';
			return;
		}

		$this->included_categories = implode( ',', array_map( 'trim', explode( ',', $this->options['categories'] ) ) );
	}
}
