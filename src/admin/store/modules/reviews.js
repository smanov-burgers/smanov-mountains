export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {
      id: -1,
      author: "",
      occ: "",
      photo: "",
      text: "",
    },
    editorVisible: false,
  },
  mutations: {
    SET_REVIEWS: (state, data) => (state.reviews = data),
    ADD_REVIEW: (state, review) => {
      state.editorVisible = false;
      state.reviews.push(review);
    },
    APPEND_REVIEW: (state, review) => state.reviews.unshift(review),
    DELETE_REVIEW: (state, review) =>
      (state.reviews = state.reviews
        .filter((w) => w.id !== review.id)
        .reverse()),
    EDIT_REVIEW: (state, review) => {
      state.editorVisible = false;
      state.reviews = state.reviews.filter((w) => w.id !== review.id).reverse();
      state.reviews.push(review);
    },
    OPEN_REVIEW: (state, review) => {
      state.currentReview = { ...review };
      state.editorVisible = true;
    },
    CLOSE_EDITOR: (state, review) => {
      state.editorVisible = false;
      state.currentReview = {
        id: -1,
        author: "",
        occ: "",
        photo: "",
        text: "",
      };
    },
  },
  actions: {
    async upsertReview({ commit }, review) {
      try {
        const formData = new FormData();
        formData.append("author", review.author);
        formData.append("occ", review.occ);
        formData.append("photo", review.photo);
        formData.append("text", review.text);

        if (review.id < 0) {
          const { data } = await this.$axios.post(`/reviews`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          commit("ADD_REVIEW", data);
        } else {
          const { data } = await this.$axios.post(
            `/reviews/${review.id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          commit("EDIT_REVIEW", data.review);
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteReview({ commit }, review) {
      try {
        if (review.id >= 0) {
          const { data } = await this.$axios.delete(`/reviews/${review.id}`);
        }

        commit("DELETE_REVIEW", review);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async openReviewInEditor({ commit }, review) {
      try {
        commit("OPEN_REVIEW", review);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async closeReviewInEditor({ commit }) {
      try {
        commit("CLOSE_EDITOR");
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async openNewReviewInEditor({ commit }) {
      try {
        var review = {
          id: -1,
          author: "",
          occ: "",
          photo: "",
          text: "",
        };
        commit("OPEN_REVIEW", review);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchReviews({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get(
          `/reviews/${rootState.user.user.id}`
        );
        commit("SET_REVIEWS", data);
      } catch (error) {}
    },
  },
};
