// Stylesheets & artsy stuff
import "vuetify/dist/vuetify.min.css";

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
import AppShell from "./components/AppShell.vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignupPage from "./components/SignupPage.vue";
import SchedulePage from "./components/SchedulePage.vue";
import SubjectList from "./components/SubjectList.vue";

// Initialise firebase
import firebaseConfig from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: "18aa8d"
  }
});

let signedIn = false;
const navigationGuard = function(to, from, next) {
  if (signedIn) next();
  else next({ path: "/login" });
};

const routes = [
  { path: "/login", component: LoginPage },
  {
    path: "/",
    component: AppShell,
    children: [
      { path: "", component: HomePage, beforeEnter: navigationGuard },
      {
        path: "subjects",
        component: SubjectList,
        beforeEnter: navigationGuard
      },
      { path: "signup", component: SignupPage, beforeEnter: navigationGuard },
      {
        path: "schedule",
        component: SchedulePage,
        beforeEnter: navigationGuard
      }
    ]
  }
];

const router = new VueRouter({
  routes: routes
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    signedIn = true;
    router.push("/");
  }
});

// eslint-disable-next-line
let vue = new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
