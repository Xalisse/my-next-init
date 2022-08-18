import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      const browserify = require("@cypress/browserify-preprocessor");
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
      on("file:preprocessor", cucumber(options));

      config.baseUrl = config.env.BASE_URL;
      return config;
    },
    specPattern: "**/*.feature",
  },
  video: false,
});
