const CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");

let entry = {};

require("fs")
  .readdirSync("src")
  .forEach((file) => {
    const p = path.parse(file);
    if (p.ext === ".ts") {
      entry[p.name] = path.resolve("src", file);
    }
  });

console.log("entry:", entry);
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./extension"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/browserAction",
        },
        {
          from: "src/manifest.json",
        },
        {
          from: "src/icons",
          to: "icons",
        },
      ],
    }),
  ],
};
