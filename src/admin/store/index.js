import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import skills from "./modules/skills";
import works from "./modules/works";
import reviews from "./modules/reviews";
import user from "./modules/user";
import customError from "./modules/error";

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    user,
    works,
    reviews,
    customError,
  },
});
