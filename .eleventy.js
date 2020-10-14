module.exports = function (eleventyConfig) {
  // Layouts
  eleventyConfig.addWatchTarget('_styles/');

  // Copy assets to _site dir
  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/images');
  eleventyConfig.addPassthroughCopy('assets/videos');
  eleventyConfig.addPassthroughCopy('assets/favicons');

  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  return {
    dir: {
      input: './',
      output: './_site',
    },
    passthroughFileCopy: true,
  };
};
