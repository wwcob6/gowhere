import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classNumber: '通信一班'
  },
  actions: {
    changeClass (context, classNumber) {
      context.commit('changeClass', classNumber)
    }
  },
  mutations: {
    changeClass (state, classNumber) {
      state.classNumber = classNumber
    }
  }
})
