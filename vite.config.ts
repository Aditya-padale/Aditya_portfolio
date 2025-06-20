import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // Set root to client so index.html is at dist root
  plugins: [react()],
  build: {
    outDir: "../dist", // Output to project root dist
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
});
