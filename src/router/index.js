import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TelephoneView from "../views/TelephoneView.vue";
import PersonnagesView from "../views/PersonnagesView.vue";
import FormView from "../views/FormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Telephone",
    name: "Telephone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TelephoneView,
  },
  {
    path: "/personnages",
    name: "personnages",
    component: PersonnagesView,
  },
  {
    path: "/Form",
    name: "Form",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
