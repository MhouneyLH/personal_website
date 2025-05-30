import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// see router.js for handling different base url
// when e. g. deployed to github pages...
let basePath = "/";
if (process.env.NODE_ENV === "production") {
  basePath = "/portfolio/";
}

// docker has problems with resolving /personal_website/ ...
if (process.env.DOCKER_ENV === "true") {
  basePath = "/";
}

console.log("Using base path: ", basePath);

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
