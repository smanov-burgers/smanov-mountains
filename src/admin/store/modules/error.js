export default {
  namespaced: true,
  state: {
    error: {},
  },
  mutations: {
    SET_ERROR: (state, error) => (state.error = error),
    CLEAR_ERROR: (state) => (state.error = {}),
  },
  getters: {
    isThereActiveError: (state) => {
      const errorObj = state.error;
      const errorObjectIsEmpty =
        Object.keys(errorObj).length === 0 && errorObj.constructor === Object;

      return errorObjectIsEmpty === false;
    },
  },
  actions: {
    closeError({ commit }) {
      commit("CLEAR_ERROR");
    },
    displayError({ commit }, error) {
      commit("SET_ERROR", error);
    },
  },
};
