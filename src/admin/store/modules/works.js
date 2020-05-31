export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {
      id: -1,
      title: "",
      techs: "",
      photo: "",
      link: "",
      description: "",
    },
    editorVisible: false,
  },
  mutations: {
    SET_WORKS: (state, data) => (state.works = data),
    ADD_WORK: (state, work) => {
      state.editorVisible = false;
      state.works.push(work);
    },
    APPEND_WORK: (state, work) => state.works.unshift(work),
    DELETE_WORK: (state, work) =>
      (state.works = state.works.filter((w) => w.id !== work.id).reverse()),
    EDIT_WORK: (state, work) => {
      state.editorVisible = false;
      state.works = state.works.filter((w) => w.id !== work.id).reverse();
      state.works.push(work);
    },
    OPEN_WORK: (state, work) => {
      state.currentWork = { ...work };
      state.editorVisible = true;
    },
    CLOSE_EDITOR: (state, work) => {
      state.editorVisible = false;
      state.currentWork = {
        id: -1,
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: "",
      };
    },
  },
  actions: {
    async upsertWork({ commit }, work) {
      try {
        console.log(work);

        const formData = new FormData();
        formData.append("title", work.title);
        formData.append("techs", work.techs);
        formData.append("photo", work.photo);
        formData.append("link", work.link);
        formData.append("description", work.description);

        if (work.id < 0) {
          const { data } = await this.$axios.post(`/works`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          commit("ADD_WORK", data);
        } else {
          const { data } = await this.$axios.post(
            `/works/${work.id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          commit("EDIT_WORK", data.work);
        }
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteWork({ commit }, work) {
      try {
        if (work.id >= 0) {
          const { data } = await this.$axios.delete(`/works/${work.id}`);
        }

        commit("DELETE_WORK", work);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async openWorkInEditor({ commit }, work) {
      try {
        commit("OPEN_WORK", work);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async closeWorkInEditor({ commit }) {
      try {
        commit("CLOSE_EDITOR");
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async openNewWorkInEditor({ commit }) {
      try {
        var work = {
          id: -1,
          title: "",
          techs: "",
          photo: "",
          link: "",
          description: "",
        };
        commit("OPEN_WORK", work);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchWorks({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get(
          `/works/${rootState.user.user.id}`
        );
        commit("SET_WORKS", data);
      } catch (error) {}
    },
  },
};
