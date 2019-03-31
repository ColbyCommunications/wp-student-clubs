<?php

namespace Colby_Comms\Student_Clubs\Tests;

use Colby_Comms\Student_Clubs\{App_Root, Student_Clubs};
use \WP_UnitTestCase as WP_UnitTestCase;

/**
 * @coversDefaultClass \Colby_Comms\Student_Clubs\App_Root
 */
class App_Root_Test extends WP_UnitTestCase {
	public function setUp() {
		parent::setUp();

		$this->post = $this->factory->post->create_and_get(
			[
				'post_title'   => 'My post',
				'post_content' => sprintf( '[%s]', App_Root::SHORTCODE ),
			]
		);
	}

	public function test_set_up() {
		$instance = App_Root::get_instance();

		$this->go_to( get_permalink( $this->post ) );

		$this->assertTrue( shortcode_exists( App_Root::SHORTCODE ) );
		$this->assertEquals( 10, has_action( 'wp_enqueue_scripts', [ $instance, 'maybe_set_up_assets' ] ) );
		$this->assertTrue( $instance->should_render() );

		wp_script_is( Student_Clubs::ASSET_HANDLE, 'enqueued' );
		wp_style_is( Student_Clubs::ASSET_HANDLE, 'enqueued' );

		$shortcode_content = 'shortcode content';
		$instance->render( [], $shortcode_content );
		$this->assertEquals( $shortcode_content, $instance->get_content() );
	}
}
