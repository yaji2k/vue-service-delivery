import router from '../router';
import HTTP from '../services/http';

export default {
  namespaced: true,
  state: {
    registerName: null,
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    loginEmail: "test@gmail.com",
    loginPassword: "123456",
    loginError: null,
    token: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setRegisterName(state, name) {
      state.registerName = name;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setToken(state, token) {
      state.token = token;
    },
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
  },
  actions: {
    logout({
      commit
    }) {
      commit('setToken', null);
      router.push('/login');
    },
    async register({
      state,
      commit
    }) {
      try {
        commit('setRegisterError', null);
        const { data }= await HTTP().post('auth/register', {
          username: state.registerName,
          email: state.registerEmail,
          password: state.registerPassword,
        });
        commit('setToken', data.token);
        router.push('/');
      } catch (error) {
        commit('setRegisterError', 'Invalid Reg. Information');
      }
    },
    login({
      state,
      commit
    }) {
      commit('setLoginError', null);
      return HTTP().post('auth/login', {
          email: state.loginEmail,
          password: state.loginPassword,
        })
        .then(({
          data
        }) => {
          commit('setToken', data.token);
          router.push('/');
        })
        .catch((e) => {
          console.log(e);
          commit('setLoginError', 'Invalid Login. Information');
        });
    }
  },
};
