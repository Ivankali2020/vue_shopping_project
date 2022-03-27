import { createStore } from 'vuex'

export default createStore({
  state: {
      products:null,
      product:null,

  },
  getters: {
      Products(state){
          return state.products;
      },
      Product(state){
          return state.product;
      },

  },
  mutations: {
      GET_PRODUCTS : (state,value) => state.products = value,
      GET_PRODUCT : (state,value) => state.product = value,
  },
  actions: {
      getProducts : ({commit}) => {
            fetch('https://fakestoreapi.com/products/').then(res => res.json())
                .then(result => {
                    commit('GET_PRODUCTS',result);
                    console.log(result);
                });
      },
      getProduct : ({state,commit},value) => {
          state.product = null;
          fetch('https://fakestoreapi.com/products/'+value).then(res => res.json())
              .then(result => {
                  commit('GET_PRODUCT',result);
                  console.log(result);
              });
      },
      newStyleProduct: ({state,commit},id) => {
          let result = state.products.filter(el => el.id === id);
          console.log(id);
          commit('GET_PRODUCT',result)
      }


  },
  modules: {

  },
})
