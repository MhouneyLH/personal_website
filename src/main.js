import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./main.css";

import vuetify from "./plugins/vuetify";
import primeVue from "./plugins/primeVue";

// always use dark theme
document.documentElement.classList.add("dark");

const app = createApp(App);

app.use(router);
primeVue(app);
app.use(vuetify);

// Mount the app to a DOM element with the id 'app'
app.mount("#app");
