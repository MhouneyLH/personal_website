import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { Button, Card, Timeline } from "primevue";

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        // Define in tailwind.config.cjs
        darkModeSelector: ".dark",
      },
    },
    ripple: true,
  });

  // Register components globally
  app.component("Button", Button);
  app.component("Card", Card);
  app.component("Timeline", Timeline);
};
