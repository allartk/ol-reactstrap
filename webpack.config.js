const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
