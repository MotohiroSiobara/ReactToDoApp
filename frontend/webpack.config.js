var path = require('path');

module.exports = {
  entry: {
    app: './index.js',
  },

  output: {
    path: path.join(__dirname, '../app/assets/javascripts/webpack'),
    filename: 'react_components.js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
}
