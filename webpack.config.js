const path = require('path');

module.exports = {
  entry: {
    content: './src/content-script.js',
  },
  output: {
    filename: 'content-script.js',
    path: path.resolve(__dirname, './extension'),
  },
  mode: 'production',
};
