import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Home from "./Home.vue";
import SubjectList from "./SubjectList.vue";

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/subjects", component: SubjectList }
];

const router = new VueRouter({
  routes: routes
});

let vue = new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
