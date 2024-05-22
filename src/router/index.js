import { createRouter, createWebHistory } from "vue-router";
import PageItem1 from "@/pages/PageItem1.vue";
import PageItem2 from "@/pages/PageItem2.vue";
import PageDetail from "@/pages/PageDetail/[id].vue";
import PageAbout from "@/pages/PageAbout.vue";

const routes = [
  {
    path: "/",
    redirect: "/PageItem1", // Redirection vers la première page par défaut
  },
  {
    path: "/PageItem1",
    component: PageItem1,
  },
  {
    path: "/PageItem2",
    component: PageItem2,
  },
  {
    path: "/PageDetail/:id", // Chemin dynamique avec un paramètre :id
    component: PageDetail,
  },
  {
    path: "/PageAbout",
    component: PageAbout,
  },
  // Ajoutez d'autres routes au besoin
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
