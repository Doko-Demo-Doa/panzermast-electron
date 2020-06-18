module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // Electron Builder options here...
        appId: "com.clipsub.panzermast",
        productName: "Panzermast"
      },
      disableMainProcessTypescript: false,
      mainProcessTypeChecking: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/variables.scss";
          @import "@/styles/colors.scss";
        `
      }
    }
  }
};
