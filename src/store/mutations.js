import types from '@/store/mutationTypes';

export default {
  [types.SHOW_ERROR](state, data) {
    state.error = data;
  },

  [types.HIDE_ERROR](state) {
    state.error = null;
  }
};
