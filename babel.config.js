module.exports = {
  presets: ["@vue/app"],
  plugins: [
    // ["import", { libraryName: "iview", libraryDirectory: "src/components" }],
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false
      },
      "lodash"
    ]
  ]
};
