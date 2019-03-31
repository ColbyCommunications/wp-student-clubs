/**
 * External dependencies
 */
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const path = require( 'path' );
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );

module.exports = ( env, argv ) => {
	const entry = {
		'wp-student-clubs': './assets/src/',
		'wp-student-clubs-block': './assets/src/admin/',
	};

	const plugins = [ new ExtractTextPlugin( '[name].css' ) ];

	if ( ! argv.watch ) {
		plugins.push( new BundleAnalyzerPlugin( { analyzerMode: 'static' } ) );
	}

	return {
		entry,
		output: {
			path: path.resolve( __dirname, 'assets/dist' ),
		},
		plugins,
		externals: {
			lodash: 'lodash	',
			react: 'React',
			'@wordpress/api-fetch': 'wp.apiFetch',
			'@wordpress/blocks': 'wp.blocks',
			'@wordpress/components': 'wp.components',
			'@wordpress/compose': 'wp.compose',
			'@wordpress/data': 'wp.data',
			'@wordpress/dom-ready': 'wp.domReady',
			'@wordpress/editor': 'wp.editor',
			'@wordpress/element': 'wp.element',
			'@wordpress/html-entities': 'wp.htmlEntities',
			'@wordpress/i18n': 'wp.i18n',
			'@wordpress/url': 'wp.url',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: { babelrc: true },
						},
					],
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract( {
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
									modules: true,
									localIdentName: '[local]--[hash:base64:5]',
								},
							},
							{ loader: 'sass-loader' },
						],
					} ),
				},
			],
		},
	};
};
