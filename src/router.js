import Vue from "vue";
import Vuex from 'vuex'
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import LoginComponent from "./views/Login.vue"
import SecureComponent from "./views/Secure.vue"
Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    }
  ]
});
