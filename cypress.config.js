const { defineConfig } = require("cypress");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    stepDefinitions: "cypress/support/step_definitions/**/*.js",

    viewportWidth: 1353,
    viewportHeight: 911,
    baseUrl: "https://automationpratice.com.br/",

    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },

  env: {
    userEmail: "_serviceadm@service.com",
    senha: "123456"
  }
});
