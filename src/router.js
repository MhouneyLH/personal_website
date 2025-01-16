import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Add more routes here as needed, for example:
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: () => import('./views/ProjectsView.vue')
    // }
  ],
});

export default router;
