const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  // projectId: "q6f6ke",
  // CYPRESS_RECORD_KEY: "16d28731-abdf-42f7-bac7-358ed3d2bf2e",
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // Implement node event listeners here

    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      env: 'staging', // Default environment
    },
    // defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    specPattern: 'cypress/e2e/**/*.cy.js',
    videosFolder: 'cypress/videos',
    viewportWidth: 1519.2,
    viewportHeight: 677,
    screenshotsFolder: 'cypress/screenshots',
    // retries: {
    //   runMode: 1,
    //   openMode: 1
    // },
    video: true,
  },
});
