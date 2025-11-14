import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LegalNoticeView from "./views/LegalNoticeView.vue";
import PrivacyView from "./views/PrivacyView.vue";
import BlogView from "./views/BlogView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/legal",
    name: "legal",
    component: LegalNoticeView,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
];

const router = createRouter({
  // when deploying e. g. to github pages we need this
  // as it appends /repository_name/ to the url...
  // otherwise the resources won't be found
  // see vite.config.js for the base url
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
