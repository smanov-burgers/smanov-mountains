<template lang="pug">
  section.section.works
    .section__head
      h1.page__title Блок «Работы»
      //- pre {{works}}
    works-editor(v-if="editorVisible" :selectedWork="currentWork")
    works-list(:worksList="works")
</template>


<script>
  import SvgIcon from "../components/util/svg-icon.vue"
  import worksEditor from "../components/works-editor/works-editor.vue";
  import worksList from "../components/works-list/works-list.vue";
  import { mapActions, mapState } from "vuex";
  
  export default {
    components: {SvgIcon, worksEditor, worksList},
    data: () => ({
    }),
    computed : {
      ...mapState("works", {
        works: state => state.works,
        currentWork: state => state.currentWork,
        editorVisible: state => state.editorVisible,
      })
    },
    created() {
      this.fetchWorks();
    },
    methods: {
      ...mapActions("works", ["fetchWorks"]),
      async pushNewCategory() {
        try {
          await this.fetchWorks();
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