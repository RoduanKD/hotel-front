import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taxes: [],
    food: [],
    drinks: [],
  },
  mutations: {
    // addtaxi: (state, taxi) => {
    //   state.taxes.push(taxi)
    // },
  },
  actions: {
  },
  modules: {
  },
})
