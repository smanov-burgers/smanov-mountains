export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, category) => state.categories.push(category),
    APPEND_CATEGORY: (state, category) => state.categories.unshift(category),
    DELETE_CATEGORY: (state, category) => state.categories = state.categories.filter(cat => cat.id !== category.id).reverse(),
    EDIT_CATEGORY: (state, category) => state.categories = state.forEach((cat, index) => {
      if(cat.id === category.id) {
          items[index] = category;
      }
    }),
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    },

    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async appendNewCategory({ commit }, title) {
      try {
        console.log(title);
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
        var newCat = new Object();
        newCat.id = -1;
        commit("DELETE_CATEGORY", newCat); 
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async insertNewCategory({ commit, state }) {
      if(state.categories.some(c => c.id === -1))
        {
          throw new Error(
            "Уже есть новая категория"
          );
        }
      try {
        var newCat = new Object();
        newCat.id = -1;
        newCat.category = "";
        newCat.skills = [];

        commit("APPEND_CATEGORY", newCat);

      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteCategory({ commit }, category) {
      try {
        if(category.id >= 0)
        {
          const { data } = await this.$axios.delete(`/categories/${category.id}`);
        }
        
        commit("DELETE_CATEGORY", category);
        
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({ commit }, category) {
      try {
        
        const { data } = await this.$axios.post(`/categories/${category.id}`, { title: category.category});
        commit("EDIT_CATEGORY", category);
        
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async fetchCategories({ commit, rootState }) {
      try {
        const { data } = await this.$axios.get(`/categories/${rootState.user.user.id}`);
        commit("SET_CATEGORIES", data);
      } catch (error) {}
    },

    
  }
};
