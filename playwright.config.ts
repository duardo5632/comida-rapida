import { defineConfig } from '@playwright/test';
//ver bien
export default defineConfig({
  webServer: {
    command: 'npm run dev', // 👈 Tu comando para levantar el servidor
    port: 5173,              // 👈 El puerto que tu app usa
    timeout: 120 * 1000,     // Espera hasta que levante
    reuseExistingServer: true, // No reinicia si ya está corriendo
  },
  use: {
    baseURL: 'http://localhost:5173/',
  },
});