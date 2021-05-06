import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
