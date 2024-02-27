import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run sample:serve',
        production: 'nx run sample:preview',
      },
      ciWebServerCommand: 'nx run sample:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
