import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import createLogger from '@/utils/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const context = require.context('@/store/modules/', true, /\.js$/);
const keys = context.keys();
const modules = {};
keys.forEach(key => {
  modules[key.substr(2, key.length - 5)] = context(key).default || context(key);
});

const state = {
  isFetching: false,
  error: null
};

const getters = {
  isFetching: state => state.isFetching,
  error: state => state.error
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
