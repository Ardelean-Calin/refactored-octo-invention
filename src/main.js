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

const routes = [
  { path: "/", component: HomePage },
  { path: "/subjects", component: SubjectList },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  { path: "/schedule", component: SchedulePage }
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
