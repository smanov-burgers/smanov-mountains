<template lang="pug">
    .headline
      .headline__left
        .headline__user
          img(src="~images/content/user.jpg").headline__user-icon
      .headline__right
        .headline__user-name {{currentUser.name}}
        .headline__page-title Панель администрированияя
        .headline__logout
            a(@click.prevent='logout').logout-btn Выйти
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;

  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0;
    width: 45px;
  }
  &__user {
    display: flex;
    width: 45px;
    height: 45px;
  }
  &__right {
    margin-left: 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
  }

  &__user-name {
    color: #fff;
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 18px;
  }

  &__user-icon {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &__page-title {
    color: rgba(#fff, 0.5);
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
  }

  &__page-title {
    margin-left: 28px;
    @include phones {
      display: none;
    }
  }

  &__logout {
    margin-left: auto;
  }
}
</style>

<script>
import $axios from "../../requests";
import SvgIcon from "../util/svg-icon.vue";
import store from "../../store";

export default {
  components: { SvgIcon },
  props: ["username", "userpic"],
  data() {
    return {
      submitStatus: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    async logout() {
      try {
        const response = await $axios.post("/logout");

        localStorage.removeItem("token");

        store.dispatch("user/logout");

        delete $axios.defaults.headers;

        this.$router.push("/login");
      } catch (error) {
        //console.log(error);
      }
    },
  },
};
</script>
