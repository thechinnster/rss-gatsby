/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        url: `http://boysinthecave.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"],
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          },
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-postCss`,
    //   options: {
    //     postCssPlugins: [
    //       require("tailwindcss"),
    //       // require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
  ],
}
