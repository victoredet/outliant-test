import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Products from "../view/Products.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/products",
      component: Products,
    },
  ],
});
