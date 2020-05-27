import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    setLogin(state) {
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = false;
    },
  },
  actions: {
    setLogin(context) {
      context.commit("setLogin");
    },
    setLogout(context) {
      context.commit("logOut");
    },
  },
  getters: {
    LOGIN_STATE(state) {
      return state.isLogin;
    },
  },
});
export default store;
