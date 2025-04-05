import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  // when deploying e. g. to github pages we need this
  // as it appends /repository_name/ to the url...
  // otherwise the resources won't be found
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
