import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        sidepanel: resolve(
          __dirname,
          "index.html"
        ),

        content: resolve(
          __dirname,
          "src/content/index.ts"
        )
      },

      output: {
        entryFileNames: assetInfo => {
          if (
            assetInfo.name === "content"
          ) {
            return "content.js";
          }

          return "assets/[name]-[hash].js";
        }
      }
    }
  }
});