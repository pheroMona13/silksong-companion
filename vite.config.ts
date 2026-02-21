import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  base: '/silksong-companion/',
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "virel-silksong",
        short_name: "Silksong Companion",
        description: "Companion app for the game, Hollow Knight: Silksong",
        theme_color: "#242424",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,json}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
