const path = require("path");

// @ts-ignore
module.exports = (_, arg) => {
  return {
    mode: "development",
    entry: {
      desktop: path.resolve(__dirname, "/src/Desktop.tsx"),
      config: path.resolve(__dirname, "/src/Config.tsx"),
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: `grn-api-plugin-[name].js`,
    },
    target: ["web", "es6"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [/node_modules/, /build/],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devtool: arg.mode === "development" ? "inline-source-map" : false,
  };
};
