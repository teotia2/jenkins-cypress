const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    mailosaurApiKey: 'rCFOjn6uRNM5mqKrWBPfenMWlGwGOXPv',
    mailosaurServerId: 'bj4hibbz'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,
    screenshotOnRunFailure: true,
  }
});
