import { createStore } from 'vuex'

export default createStore({
  state: {
      products:null,
      product:null,
      cart : null,
      auth:{
        'username' : null,
        'password' : null,
        'token' : null,
      }
  },
  getters: {
      Products(state){
          return state.products;
      },
      Product(state){
          return state.product;
      },
      Cart(state){
          return state.cart;
      },
      Auth(state){
        return state.auth;
      }

  },
  mutations: {
      GET_PRODUCTS : (state,value) => state.products = value,
      GET_PRODUCT : (state,value) => state.product = value,
      STORE_CART : (state,value) => state.cart = value,
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
      },
      storeCart : ({ state,commit},value) => {
          var myHeaders = new Headers();
          myHeaders.append("Accept", "application/json");
          myHeaders.append("Authorization", "Bearer 3|oKRuXFThFrPskLjWI0rZPOKBrWeN6yLdOXacLNHR");

          var formdata = new FormData();
          formdata.append("quality", value.qualtity);
          formdata.append("product_id", value.product_id);

          var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
          };

          fetch("http://127.0.0.1:8000/api/carts", requestOptions)
              .then(response => response.text())
              .then(result => {
                  console.log(result)
                  commit('STORE_CART',result)
              })
              .catch(error => console.log('error', error));
      }


  },
  modules: {

  },
})
