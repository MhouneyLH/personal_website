import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./main.css";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { Card } from "primevue";

document.documentElement.classList.add("dark");

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // define in tailwind.config.cjs
      darkModeSelector: ".dark",
    },
  },
  ripple: true,
});

app.component("Card", Card);

// Mount the app to a DOM element with the id 'app'
app.mount("#app");
