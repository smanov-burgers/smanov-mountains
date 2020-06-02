<template lang="pug">
    section.section.about
        .section__head
            h1.page__title Блок «Обо мне»
            a.about__btn-add 
                .about__btn-add__icon
                    .btn-add
                |Добавить группу
        ul.about__list
            li.about__list-elem
                skills-category
            li.about__list-elem
                skills-category
            li.about__list-elem
                skills-category
            li.about__list-elem
                skills-category
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.section {
  padding-left: 60px;
  padding-right: 58px;
  

  @include tablets {
    padding-left: 30px;
    padding-right: 30px;
  }

  @include phones {
    padding-left: 0;
    padding-right: 0;
  }

  .section__head {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @include phones {
      flex-wrap: wrap;
      width: 100%;
      padding-left: 20px;
    }
  }
}
.page__title {
  color: #414c63;
  font-family: "Open Sans";
  font-size: 21px;
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 60px;
  @include phones {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.about__btn-add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  @include phones {
    margin-left: 0;
    margin-bottom: 30px;
  }
}

.about__btn-add__icon {
  width: 21px;
  height: 21px;
  margin-right: 10px;
}
.btn-add {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  background-position: center;
  background-size: 50% 10%, 10% 50%, cover; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;

  border-radius: 50%;
}
</style>

<script>
import SvgIcon from "../util/svg-icon.vue";
import skillsCategory from "../skills-category/skills-category.vue";

export default {
  components: { SvgIcon, skillsCategory },
};
</script>
