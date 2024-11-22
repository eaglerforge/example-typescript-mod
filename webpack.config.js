const path = require('path');
const package = require('./package.json')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, './out'),
    filename: package.name + ".js", // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      },
      { test: /\.css$/, use: 'css-loader' }
        
    ]
  },
  optimization: {
    mangleExports: 'deterministic',
    minimize: true,
  },
};
