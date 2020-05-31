<template lang="pug">
    .reviews-list__wrapper
        ul.reviews-list
            li.reviews-list__item
                a(@click.prevent="newReview").reviews-list__add-wrapper
                    .reviews-list__add-btn
                    .reviews-list__add-text Добавить отзыв
            li(v-for="review in reviewsList" :key="review.id").reviews-list__item
                review(:review="review")

</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.reviews-list__wrapper {
  width: 100%;
  display: flex;
}
.reviews-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.reviews-list__item {
  width: calc(100% / 3-20px);
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  min-height: 480px;
  margin-right: 30px;
  margin-bottom: 30px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  @include tablets {
    width: calc(100% / 2-20px);
    &:nth-child(3n) {
      margin-right: 30px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @include phones {
    width: 100%;
    margin-right: 0;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:first-child {
      min-height: 110px;
    }
  }
}
.reviews-list__add-wrapper {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @include phones {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 10%;
  }
}
.reviews-list__add-btn {
  position: relative;
  width: 40%;
  display: flex;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  background-position: center;
  background-size: 50% 2%, 2% 50%, cover; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid #fff;
  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  @include phones {
    width: 12%;
    background-size: 50% 7%, 7% 50%, cover;
  }
}

.reviews-list__add-text {
  margin-top: 30px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
  width: 30%;
  text-align: center;
  @include phones {
    margin-top: 0;
    width: 50%;
    margin-left: 5%;
  }
}
</style>

<script>
import SvgIcon from "../util/svg-icon.vue";
import review from "../review/review.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      submitStatus: null,
    };
  },
  components: { SvgIcon, review },
  props: {
    reviewsList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions("reviews", ["openNewReviewInEditor"]),
    async newReview() {
      try {
        await this.openNewReviewInEditor();
      } catch (error) {}
    },
  },
};
</script>
