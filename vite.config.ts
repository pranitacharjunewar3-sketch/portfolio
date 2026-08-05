import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages project-page base path. Deploys to /portfolio/
  base: "/portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    target: "es2020",
  },
});