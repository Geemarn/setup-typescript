const CracoLessPlugin = require("craco-less");
const { theme } = require("./theme.config.js");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // override antd default themes
            modifyVars: {...theme},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
