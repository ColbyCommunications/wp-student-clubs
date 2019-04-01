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
4. When the Lando boot script is finished running, it will show you the URLs you can use to load the site.

The plugin is designed to work in a server environment that doesn't have Composer or Node, so compiled JS/CSS assets and the required Composer packages are included in the repo. To develop locally, however, after the above steps you will need to run the following commands:

```
composer update
npm install
```

To start a Webpack process that will watch the plugin's JS and CSS files and recompile on change, run `npm start`.

## `student-organizations` shortcode

The pre-WP-5.0 implementation uses a shortcode to display the application on the page. The legacy version required the user to enter two shortcode attributes to tell the app where to fetch data. These attributes are:

-   `endpoint`: The URL of the WP REST endpoint from which to fetch student organization posts. This attribute is now optional, defaulting to the endpoint for the `student-organizations` post type on the current site.
-   `categories-endpoint`: The URL of the WP REST endpoint from which to fetch the categories associated with the student organization posts. This attribute is now optional, defaulting to the `categories` endpoing for the current site.

There is also the optional attribute `categories`, which takes a comma-separated list of category IDs. When that attribute is set, the display is different -- showing only the posts in the specified categories -- and has no interactivity.

The content of the shortcode, if it exists, serves as the application home screen; it shows when the user has not interacted with the page or has unset the interactions.

## "Student Clubs" block

The new version of the plugin adds an editor block found under "Layout Elements." The block has options corresponding to the shortcode attributes. Similarly to the shortcode, the content of the block serves as the app home screen.
