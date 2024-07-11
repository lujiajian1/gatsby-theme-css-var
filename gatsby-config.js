// const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: '@import "./src/styles/variables.scss";',
        postCssPlugins: [
          // require("postcss-custom-properties")()
          require("postcss-css-variables")({preserve: true}),
        ]
      },
    }
  ],
};
