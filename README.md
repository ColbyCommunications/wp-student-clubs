# WP Student Clubs

This WordPress plugin does the following:

1. Sets up a post type for student organizations.
2. Creates several meta fields on student organization posts.
3. Creates a shortcode for printing student organization listings in posts.
4. Creates a Gutenberg block for placing student organization listings in posts.

The feature is rendered on the page using JS packages developed for the WordPress core around the Gutenberg project.

## Development

The plugin comes with a Lando-based development environment. To develop locally:

1. [Install Lando](https://docs.devwithlando.io/installation/macos.html)
2. Clone this repository
3. From inside the plugin directory, run `lando start`

The plugin is designed to work in a server environment that doesn't have Composer or Node, so compiled JS/CSS assets and the required Composer packages are included in the repo. To develop locally, however, after the above steps you will need to run the following commands:

```
composer update
npm install
```

To start a Webpack process that will watch the plugin's JS and CSS files and recompile on change, run `npm start`.
