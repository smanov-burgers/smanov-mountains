<template lang="pug">
  section.section.reviews
    .section__head
      h1.page__title Блок «Обо мне»
    reviews-editor(v-if="editorVisible" :selectedReview="currentReview")
    reviews-list(:reviewsList="reviews")
</template>

<script>
  import SvgIcon from "../components/util/svg-icon.vue"
  import reviewsEditor from "../components/reviews-editor/reviews-editor.vue";
  import reviewsList from "../components/reviews-list/reviews-list.vue";
  import { mapActions, mapState } from "vuex";

  export default {
    components: {SvgIcon, reviewsEditor, reviewsList},
    data: () => ({
    }),
    computed : {
      ...mapState("reviews", {
        reviews: state => state.reviews,
        currentReview: state => state.currentReview,
        editorVisible: state => state.editorVisible,
      })
    },
    created() {
      this.fetchReviews();
    },
    methods: {
      ...mapActions("reviews", ["fetchReviews"])
    }
  };
</script>

<style lang="postcss" scoped>

  @import "../../styles/mixins.pcss";
  @import "./common/pages.pcss";
</style>


