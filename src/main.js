import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./main.css";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { Button, Card, Timeline } from "primevue";

import vuetify from "./plugins/vuetify"; // We'll create this file next
import "vuetify/styles"; // Vuetify styles
import "@mdi/font/css/materialdesignicons.css"; // Material Design Icons

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

// register global primevue components
// so they can by used in any component
app.component("Card", Card);
app.component("Button", Button);
app.component("Timeline", Timeline);

app.use(vuetify);

// Mount the app to a DOM element with the id 'app'
app.mount("#app");
