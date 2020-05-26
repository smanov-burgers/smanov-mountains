<template lang="pug">
  section.section.works
    .section__head
      h1.page__title Блок «Обо мне»
    reviews-editor
    reviews-list
</template>

<script>
  import SvgIcon from "../components/util/svg-icon.vue"
  import reviewsEditor from "../components/reviews-editor/reviews-editor.vue";
  import reviewsList from "../components/reviews-list/reviews-list.vue";
  import { mapActions, mapState } from "vuex";

  export default {
    components: {SvgIcon, reviewsEditor, reviewsList},
    data: () => ({
      title: ""
    }),
    computed : {
      ...mapState("categories", {
        categories: state => state.categories
      })
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      ...mapActions("categories", ["addCategory", "fetchCategories"]),
      async addNewCategory() {
        try {
          await this.addCategory(this.title);
        } catch (error) {
          alert(error.message);
        }
      }
    }
  };
</script>

<style lang="postcss" scoped>

  @import "../../styles/mixins.pcss";
  @import "./common/pages.pcss";
</style>


