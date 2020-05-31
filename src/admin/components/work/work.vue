<template lang="pug">
    .works-list__work.work-preview
        .work-preview__pic-wrapper
            img(:src="'https://webdev-api.loftschool.com/' + work.photo").work-preview__pic
        .work-preview__content
            .work-preview__title {{work.title}}
            .work-preview__text {{work.description}}
            .work-preview__link-wrapper
                .work-preview__link {{work.link}}
            .work-preview__btns 
                a(@click.prevent='correctWork').work-preview__btn Править
                    SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--blue", name = "pencil")
                a(@click.prevent='removeWork').work-preview__btn Удалить
                    SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--red", name = "remove")
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.work-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.work-preview__pic-wrapper {
  position: relative;
  height: 35%;
}

.work-preview__pic {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
}

.work-preview__content {
  padding: 30px;
  height: 65%;
  position: relative;
}

.work-preview__title {
  color: #414c63;
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}
.work-preview__text {
  color: rgba(#414c63, 0.7);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  height: 150px;
  overflow: hidden;
}
.work-preview__link {
  margin-top: 30px;
  color: #383bcf;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
}
.work-preview__btns {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
}
.work-preview__btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(#414c63, 0.5);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
}
.work-preview__btn-icon {
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
    work: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    ...mapActions("works", ["deleteWork", "openWorkInEditor"]),
    async removeWork() {
      try {
        await this.deleteWork(this.work);
      } catch (error) {}
    },
    async correctWork() {
      try {
        await this.openWorkInEditor(this.work);
      } catch (error) {}
    },
  },
};
</script>
