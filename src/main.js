import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import "./main.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

// Mount the app to a DOM element with the id 'app'
app.mount("#app");
