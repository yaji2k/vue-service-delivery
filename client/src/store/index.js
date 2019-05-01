import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import auth from './auth'
import deliveries from './deliveries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    deliveries,
  },
  state: {
    baseUrl: '/api',
    menuAuth: [
      {
        icon: "fingerprint",
        title: "Login",
        action: "login",
        isAuth: true
      },
      {
        icon: "account_box",
        title: "Register",
        action: "register",
        isAuth: true
      },
      {
        icon: "exit_to_app",
        title: "Logout",
        action: "logout",
        isAuth: false
      }
    ],
    menuPage: [
      {
        icon: "lists",
        title: "Deliveries",
        action: "deliveries",
        isAuth: false
      },
      {
        icon: "add",
        title: "Add delivery",
        action: "delivery",
        isAuth: false
      }
    ],
  },
  mutations: {

  },
  actions: {
    pushPage({ rootState }, action) {
      if (action === "logout") {
        rootState.auth.actions.logout();
      } else {
        router.push(`/${action}`);
      }
    },
  }
})
