// Stylesheets & artsy stuff
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

// Other dependencies
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Vue-related imports
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Components
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Schedule from "./components/Schedule.vue";
import SubjectList from "./components/SubjectList.vue";

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: colors.brown.base,
    secondary: colors.green.base
  }
});

const routes = [
  { path: "/", component: Home },
  { path: "/subjects", component: SubjectList },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/schedule", component: Schedule }
];

const router = new VueRouter({
  routes: routes
});

// eslint-disable-next-line
let vue = new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
