<template lang="pug">
  section.section
    .skills
      .section__head
        h1.page__title Блок «Обо мне»
        a.skills__btn-add(@click.prevent="pushNewCategory")
            .skills__btn-add__icon
                .btn-add
            |Добавить группу
      ul.skills__list
        li(v-for="cat in categories" :key="cat.id").skills__list-elem
          skills-category(
            :category="cat"
          )
      
</template>

<script>
import SvgIcon from "../components/util/svg-icon.vue";
import skillsCategory from "../components/skills-category/skills-category.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { SvgIcon, skillsCategory },
  data: () => ({
    title: "",
  }),
  computed: {
    ...mapState("categories", {
      categories: (state) => state.categories,
    }),
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["insertNewCategory", "fetchCategories"]),
    async pushNewCategory() {
      try {
        await this.insertNewCategory();
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
@import "./common/pages.pcss";

.skills {
  max-width: 1280px;  
}
.skills__btn-add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  @include phones {
    margin-left: 0;
    margin-bottom: 30px;
  }
}

.skills__btn-add__icon {
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
  background-size: 50% 10%, 10% 50%, cover;
  /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;

  border-radius: 50%;
}

.skills__list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.skills__list-elem {
  display: flex;
  flex: 1 1 45%;
  justify-content: flex-start;
  align-items: center;
  max-width: 50%;
  &:nth-child(even) {
    padding-left: 2%;
  }

  &:nth-child(odd) {
    padding-right: 2%;
  }

  @include phones {
    flex: 1 1 100%;
    max-width: 100%;
    &:nth-child(even) {
      padding-left: 0;
    }

    &:nth-child(odd) {
      padding-right: 0;
    }
  }
}
</style>
