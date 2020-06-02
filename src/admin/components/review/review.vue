<template lang="pug">
    .reviews-list__review.review
        .review__reviwer
            .review__reviwer-avatar
                img(:src="'https://webdev-api.loftschool.com/' + review.photo").review__reviwer-pic
            .review__reviwer-desc
                .review__reviwer-name {{review.author}}
                .review__reviwer-title {{review.occ}}
        .review__content
            .review__text {{review.text}}
            .review__btns 
                a(@click.prevent='correctReview').review__btn Править
                    SvgIcon(className = "review__btn-icon review__btn-icon--blue", name = "pencil")
                a(@click.prevent='removeReview').review__btn Удалить
                    SvgIcon(className = "review__btn-icon review__btn-icon--red", name = "remove")

</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
}

.review__reviwer {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  padding-bottom: 30px;
}

.review__reviwer-avatar {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.review__reviwer-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.review__reviwer-name {
  color: #414c63;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
}

.review__reviwer-title {
  color: rgba(#414c63, 0.5);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
}

.review__pic {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
}

.review__content {
  height: auto;
  position: relative;
  height: 80%;
}

.review__text {
  color: rgba(#414c63, 0.7);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  height: 150px;
  overflow: hidden;
  min-height: 75%;
  margin-top: 30px;
}
.review__link {
  margin-top: 30px;
  color: #383bcf;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
}
.review__btns {
  margin-top: 36px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
}
.review__btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(#414c63, 0.5);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
}
.review__btn-icon {
  width: 17px;
  height: 17px;
  margin-left: 10px;
  &--blue {
    fill: #383bcf;
  }
  &--red {
    fill: #c92e2e;
  }
}
</style>

<script>
import SvgIcon from "../util/svg-icon.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: { SvgIcon },
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    ...mapActions("reviews", ["deleteReview", "openReviewInEditor"]),
    async removeReview() {
      try {
        await this.deleteReview(this.review);
      } catch (error) {}
    },
    async correctReview() {
      try {
        await this.openReviewInEditor(this.review);
      } catch (error) {}
    },
  },
};
</script>
