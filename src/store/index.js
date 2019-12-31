import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    askItem: {},
    list: [],
  },
  getters: {
    jobs(state){
      return state.jobs
    }
  },
  mutations,
  actions,
});