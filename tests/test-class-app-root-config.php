<?php

namespace Colby_Comms\Student_Clubs\Tests;

use Colby_Comms\Student_Clubs\{App_Root_Config, Student_Organization};
use \WP_UnitTestCase as WP_UnitTestCase;

/**
 * @coversDefaultClass \Colby_Comms\Student_Clubs\App_Root_Config
 */
class App_Root_Config_Test extends WP_UnitTestCase {
	public function test_init_and_get() {
		$my_endpoint            = '/wp/v2/my-endpoint';
		$my_category_endpoint   = '/wp/v2/my-category-endpoint';
		$my_included_categories = '12,43,666';

		$config = new App_Root_Config(
			[
				'endpoint'            => $my_endpoint,
				'categories-endpoint' => $my_category_endpoint,
				'categories'          => $my_included_categories,
			]
		);

		$this->assertEquals( $config->get( App_Root_Config::ENDPOINT_KEY ), $my_endpoint );
		$this->assertEquals( $config->get( App_Root_Config::CATEGORIES_ENDPOINT_KEY ), $my_category_endpoint );
		$this->assertEquals( $config->get( App_Root_Config::INCLUDED_CATEGORIES_KEY ), $my_included_categories );

		$this->assertEquals( null, $config->get( 'some-unwhitelisted-key' ) );
	}

	public function test_init_with_defaults_only() {
		$config = new App_Root_Config();

		$this->assertEquals( $config->get( App_Root_Config::ENDPOINT_KEY ), rest_url( 'wp/v2/' . Student_Organization::POST_TYPE ) );
		$this->assertEquals( $config->get( App_Root_Config::CATEGORIES_ENDPOINT_KEY ), rest_url( 'wp/v2/categories/' ) );
		$this->assertEquals( $config->get( App_Root_Config::INCLUDED_CATEGORIES_KEY ), '' );
	}
}
