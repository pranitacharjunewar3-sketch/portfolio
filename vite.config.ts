import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served at the root of the custom domain (GitHub Pages project site)
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    target: "es2020",
  },
});