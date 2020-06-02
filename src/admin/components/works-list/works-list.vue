<template lang="pug">
    .works-list__wrapper
        ul.works-list
            li.works-list__item
                a(@click.prevent="newWork").works-list__add-wrapper
                    .works-list__add-btn
                    .works-list__add-text Добавить работу
            li(v-for="work in worksList" :key="work.id").works-list__item
                work(:work="work")

</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.works-list__wrapper {
  width: 100%;
  display: flex;
}
.works-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.works-list__item {
  width: calc(100% / 3-20px);
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  min-height: 556px;
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
.works-list__add-wrapper {
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
.works-list__add-btn {
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

.works-list__add-text {
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
import work from "../work/work.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      submitStatus: null,
    };
  },
  components: { SvgIcon, work },
  props: {
    worksList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions("works", ["openNewWorkInEditor"]),
    async newWork() {
      try {
        await this.openNewWorkInEditor();
      } catch (error) {}
    },
  },
};
</script>
