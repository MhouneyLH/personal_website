import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

// Mount the app to a DOM element with the id 'app'
app.mount("#app");
