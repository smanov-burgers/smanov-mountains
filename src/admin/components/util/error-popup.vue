<template lang="pug">
    .errorPopup__overlay(v-if="isThereAnyError")
      .errorPopup__body
        .errorPopup__text {{errorMessage}}
        a(@click.prevent='closeError').errorPopup__button OK
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/blocks/error.pcss";

.errorPopup__overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #2d3c4e;
  opacity: 0.9;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}

.errorPopup__body {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  flex-direction: column;
  background: #fff;
  padding: 30px 30px;
}

.errorPopup__text {
  color: #414c63;
  font-family: "Open Sans";
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.errorPopup__button {
  border: 0;
  background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
  font-size: 13px;
  text-transform: uppercase;
  border-radius: 40px 5px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 18px;
  padding: 30px 120px;
  cursor: pointer;
  @include phones {
    padding: 30px 60px;
  }
}
</style>

<script>
import { mapActions } from "vuex";
import store from "../../store";

export default {
  methods: {
    ...mapActions("customError", ["closeError"]),
  },
  computed: {
    isThereAnyError: function () {
      return store.getters["customError/isThereActiveError"];
    },
    errorMessage: function () {
      return this.$store.state.customError.error;
    },
  },
};
</script>
