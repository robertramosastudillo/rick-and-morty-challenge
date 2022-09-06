import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "/assets/bg.jpg",
        "/assets/loader.png",
        "/assets/rick-and-morty-front.jpg",
        "/assets/rickandmortyapi-white.svg",
        "rickandmortyapi.svg",
      ],
      manifest: {
        theme_color: "#12a533",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Rick And Morty Challenge",
        short_name: "Rick And Morty Challenge",
        description: "Rick And Morty Challenge",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
