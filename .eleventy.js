// const pluginSass = require('eleventy-plugin-sass');

// const sassPluginOptions = {
//   watch: ['./_styles/*.{scss,sass}', '!node_modules/**'],
// };

module.exports = function (eleventyConfig) {
  // Plugins
  // eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

  // Layouts
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');

  // Copy assets to _site dir
  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: './',
      output: './_site',
    },
  };
};
