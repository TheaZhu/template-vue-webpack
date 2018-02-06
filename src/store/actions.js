import types from '@/store/mutationTypes';

export default {
  showError({ commit }, error) {
    commit(types.SHOW_ERROR, error);
  },
  hideError({ commit }) {
    commit(types.HIDE_ERROR);
  }
};
