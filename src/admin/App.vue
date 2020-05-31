<template lang="pug">
  .admin-wrapper.main-bg
    header(v-if="isUserLoggedIn").header
      headline
    tabs(v-if="isUserLoggedIn")
    .sections
      router-view
    custom-error
    
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import headline from "./components/headline/headline.vue";
import tabs from "./components/tabs/tabs.vue";
import store from "./store";
import customError from "./components/util/error-popup.vue";

export default {
  components: {
    headline,
    tabs,
    customError,
  },

  computed: {
    isUserLoggedIn: function () {
      return store.getters["user/userIsLoggedIn"];
    },
  },
};
</script>

<style lang="postcss">
@import "./default.pcss";
@import "../styles/mixins.pcss";

.main-bg {
  background: url(../images/bg/main-bg.png);
  background-size: cover;
  display: flex;
  align-items: center;
}
.sections {
  width: 100%;
}
.admin-wrapper {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  width: 100%;
  justify-content: center;
}

.logout-btn {
  color: rgba(#fff, 0.7);
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
}
</style>
