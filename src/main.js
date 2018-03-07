// Stylesheets & artsy stuff
import "vuetify/dist/vuetify.min.css";

// Other dependencies
// Firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// Offline plugin => No hassle service workers.
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

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
import SubjectPage from "./components/SubjectPage.vue";

// Initialise firebase
import firebaseConfig from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: "18aa8d"
  }
});

let signedIn = true;
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
      {
        path: "subjects/:id",
        component: SubjectPage,
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
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) signedIn = true;
  else router.push("/login");
});

// eslint-disable-next-line
let vue = new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
