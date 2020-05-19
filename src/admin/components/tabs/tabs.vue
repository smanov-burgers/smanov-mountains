<template lang="pug">
    .tabs
      ul.tabs__list
        li.tabs__item.tabs__item--active
          a(href="").tabs__link Обо мне
        li.tabs__item
          a(href="").tabs__link Работы
        li.tabs__item
          a(href="").tabs__link Отзывы
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
      list-style-type:none;
      padding: 30px;
      &--active {
        border-bottom: 3px solid #383bcf;
      }
      &--active .tabs__link{
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
}
</script>