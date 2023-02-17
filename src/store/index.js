import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "akin",
        price: 345,
      },
      {
        id: 2,
        name: "akin",
        price: 345,
      },
      {
        id: 3,
        name: "akin",
        price: 345,
      },
      {
        id: 4,
        name: "akin",
        price: 345,
      },
      {
        id: 5,
        name: "akin",
        price: 345,
      },
      {
        id: 6,
        name: "akin",
        price: 345,
      },
      {
        id: 7,
        name: "akin",
        price: 345,
      },
    ],
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },
    localUser(state, user) {
      state.user = user.user;
      state.token = user.token;
    },
  },
  actions: {},
  modules: {},
});
