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
        name: "Jeff",
        price: 345,
      },
    ],
    editSelect: {
      id: "",
      name: "",
      price: "",
    },
    search: "",
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    deleteProduct(state, payload) {
      state.products = payload;
    },
    updateProduct(state, payload) {
      //   state.products.push(payload);
      state.products.forEach((item) => {
        if (item.id == payload.id) {
          item.name = payload.name;
          item.price = payload.price;
        }
      });
    },
    selectItem(state, payload) {
      state.editSelect = payload;
    },
    clearItem(state, payload) {
      state.editSelect = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    },
  },
  actions: {},
  modules: {},
});
