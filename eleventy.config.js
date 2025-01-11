export default async function (eleventyConfig) {
    
    eleventyConfig.setInputDirectory("./src");
    eleventyConfig.setTemplateFormats("html,njk");
    eleventyConfig.setIncludesDirectory("./templates");

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("css");
  
    return {
      
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };

  }