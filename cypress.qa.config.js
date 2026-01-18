const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa.saucedemo.com",
    env: {
      nombreUsuario: 'standard_user',
      claveUsuario: 'secret_sauce'
    },
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
