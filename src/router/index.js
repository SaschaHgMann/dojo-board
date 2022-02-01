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
    name: "Trainings",
    component: () => import("../views/TrainingsOverview.vue")
  },
  {
    path: "/member",
    name: "Member",
    component: () =>
      import(
        /* webpackChunkName: "membersOverview" */ "../views/MembersOverview.vue"
      )
  },
  {
    path: "/schedule",
    name: "Termine",
    component: () => import("../views/ScheduleOverview.vue")
  },
  {
    path: "*",
    component: () => import("../views/404View.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
