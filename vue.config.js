const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/sass/global.sass")]
    }
  }
}