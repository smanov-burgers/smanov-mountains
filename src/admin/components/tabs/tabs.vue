<template lang="pug">
    .tabs
      ul.tabs__list
        li.tabs__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="tabs__item--active"
          ).tabs__link {{tab.title}}
</template>

<style lang="postcss" scoped>
.tabs {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background: #fff;
  padding-left: 60px;

  &__list {
    display: flex;
    width: 100%;
  }
  &__item {
    display: flex;
    list-style-type: none;
    padding: 30px;
    &--active {
      border-bottom: 3px solid #383bcf;
    }
    &--active .tabs__link {
      font-weight: bold;
    }
  }
  &__link {
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Отзывы", href: "/reviews" },
      ],
    };
  },
};
</script>
