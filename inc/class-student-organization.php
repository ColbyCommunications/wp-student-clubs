<?php
/**
 * Class Student Clubs
 *
 * @package colbycomms/wp-student-clubs
 */

namespace Colby_Comms\Student_Clubs;

use JohnWatkins0\WPSingleton\Singleton;
use WP_Post;

/**
 * Student_Clubs class
 */
class Student_Organization {
	use Singleton;

	const META_BOX_ID  = 'student_organization_meta';
	const POST_TYPE    = 'student-organization';
	const META_FIELDS  = [
		'faculty_advisor_email',
		'faculty_advisor',
		'office_phone',
		'student_advisor_email',
		'student_advisor',
		'website',
	];
	const NONCE_ACTION = 'student_organization_meta_nonce_action';
	const NONCE_NAME   = 'student_organization_meta_nonce';

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
		$this->register_post_type();
		add_action( 'rest_api_init', [ $this, 'register_rest_fields' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
		add_filter( 'wp_insert_post_data', [ $this, 'save_data' ], 10, 2 );
	}

	/**
	 * Registers the student organization post type.
	 */
	public function register_post_type() {
		register_post_type(
			self::POST_TYPE,
			[
				'label'                => esc_html__( 'Student Organizations', 'wp-student-clubs' ),
				'labels'               => [
					'singular_name' => esc_html__( 'Student Organization', 'wp-student-clubs' ),
				],
				'public'               => false,
				'show_in_rest'         => true,
				'publicly_queryable'   => true,
				'show_ui'              => true,
				'taxonomies'           => [ 'category' ],
				'register_meta_box_cb' => [ $this, 'add_meta_box' ],
			]
		);
	}

	/**
	 * Adds the meta box for setting special student organization fields.
	 */
	public function add_meta_box() {
		add_meta_box(
			self::META_BOX_ID,
			esc_html__( 'Student Organization Fields', 'wp-student-clubs' ),
			[ $this, 'render_meta_box' ],
			[ self::POST_TYPE ]
		);
	}

	/**
	 * Renders the meta box output.
	 */
	public function render_meta_box() {
		?>
		<div
			id="student-organization-meta-fields"
			data-post-id="<?php echo esc_attr( get_the_ID() ); ?>"
			data-rest-url="<?php echo esc_url( trailingslashit( rest_url( sprintf( 'wp/v2/%s', self::POST_TYPE ) ) ) ); ?>"
			>
		</div>
		<?php
		wp_nonce_field( self::NONCE_ACTION, self::NONCE_NAME );
	}

	/**
	 * Registers meta fields to provide in REST.
	 */
	public function register_rest_fields() {
		register_rest_field(
			self::POST_TYPE,
			'meta',
			[
				'get_callback' => function( $post_array ) {
					return get_post_meta( $post_array['id'] );
				},
			]
		);

		foreach ( self::META_FIELDS as $field ) {
			register_rest_field(
				self::POST_TYPE,
				$field,
				[
					'get_callback'    => [ $this, 'get_field' ],
					'update_callback' => [ $this, 'update_field' ],
					'schema'          => [
						'type' => 'string',
					],
				]
			);
		}
	}

	/**
	 * Callback for retrieving a meta field unique to the post type.
	 *
	 * @param  array  $post_array An array of post data.
	 * @param  string $key The meta field key.
	 * @return mixed The meta field value.
	 */
	public function get_field( array $post_array, $key ) {
		return get_post_meta( $post_array['id'], $key, true );
	}

	/**
	 * Updates a meta field from a POST request.
	 *
	 * @param  mixed   $value The updated value.
	 * @param  WP_Post $post_obj A WP_Post object.
	 * @param  string  $field_slug The meta field key.
	 */
	public function update_field( $value, WP_Post $post_obj, string $field_slug ) {
		update_post_meta( $post_obj->ID, $field_slug, strval( $value ) );
	}

	/**
	 * Enqueues scripts for classic mode.
	 */
	public function admin_enqueue_scripts() {
		$screen = get_current_screen();

		if ( self::POST_TYPE === $screen->id ) {
			wp_enqueue_script( Student_Clubs::BLOCK_ASSET_HANDLE );
			wp_enqueue_style( 'wp-components' );
		}
	}

	/**
	 * Saves the products meta value on post submission.
	 *
	 * @param array $post_array An array of data for the current post.
	 * @param array $form_input $_POST data.
	 * @return array Filtered array of post data.
	 */
	public function save_data( $post_array, $form_input ) {
		if ( self::POST_TYPE !== $post_array['post_type'] ) {
			return $post_array;
		}

		$nonce = $form_input[ self::NONCE_NAME ] ? $form_input[ self::NONCE_NAME ] : '';
		if ( ! wp_verify_nonce( $nonce, self::NONCE_ACTION ) ) {
			return $post_array;
		}

		foreach ( self::META_FIELDS as $field ) {
			if ( isset( $form_input[ $field ] ) ) {
				update_post_meta( get_the_ID(), $field, $form_input[ $field ] );
			}
		}

		return $post_array;
	}
}
