import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "../views/LandingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingView",
    component: LandingView,
  },
  {
    path: "/trainings",
    name: "TrainingsOverview",
    component: () => import("../views/TrainingsOverview.vue")
  },
  {
    path: "/member",
    name: "MembersOverview",
    // route level code-splitting
    // this generates a separate chunk (membersOverview.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "membersOverview" */ "../views/MembersOverview.vue"
      )
  },
  {
    path: "/schedule",
    name: "ScheduleOverview",

    component: () => import("../views/ScheduleOverview.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
