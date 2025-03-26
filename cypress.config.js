const {defineConfig} = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("esbuild-loader").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config){
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    specPattern: "cypress/e2e/**/*.feature", //ruta para archivos .feature
    supportFile: false,
    stepDefinitions: "cypress/e2e/**/*.steps.js", //ruta para archivos .steps.js
  },
});