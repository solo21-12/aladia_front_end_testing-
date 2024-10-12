import { defineConfig } from "cypress";
import { installPlugin as chromaticPlugin } from "@chromatic-com/cypress";
// Fix the import for cypress-plugin-snapshots
import { initPlugin as snapshotsPlugin } from "cypress-plugin-snapshots/plugin.js";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register Chromatic plugin
      chromaticPlugin(on, config);

      // Register cypress-plugin-snapshots plugin
      snapshotsPlugin(on, config);

      return config;
    },
    baseUrl: "http://localhost:3000",
    experimentalStudio: true, // Enable Cypress Studio if needed
  },
});
