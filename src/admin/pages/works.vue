<template lang="pug">
  section.section.works
    .section__head
      h1.page__title Блок «Обо мне»
    works-editor
    works-list
</template>


<script>
  import SvgIcon from "../components/util/svg-icon.vue"
  import worksEditor from "../components/works-editor/works-editor.vue";
  import worksList from "../components/works-list/works-list.vue";
  import { mapActions, mapState } from "vuex";
  
  export default {
    components: {SvgIcon, worksEditor, worksList},
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