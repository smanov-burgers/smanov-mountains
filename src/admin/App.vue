<template lang="pug">
  .admin-wrapper.main-bg
    auth
    header.header
      headline
    tabs
    .sections
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
                      
      section.section.works
        works-editor
        works-list

      section.section.reviews
        reviews-editor
        reviews-list
</template>

<script>
  import auth from "./components/auth/auth.vue";
  import headline from "./components/headline/headline.vue";
  import tabs from "./components/tabs/tabs.vue";
  import skillsCategory from "./components/skills-category/skills-category.vue";
  import worksEditor from "./components/works-editor/works-editor.vue";
  import worksList from "./components/works-list/works-list.vue";
  import reviewsEditor from "./components/reviews-editor/reviews-editor.vue";
  import reviewsList from "./components/reviews-list/reviews-list.vue";
  export default {
    components : {
      auth,
      headline,
      tabs,
      skillsCategory,
      worksEditor,
      worksList,
      reviewsEditor,
      reviewsList
    }
  }
</script>

<style lang="postcss">
  @import "./default.pcss";
  @import "../styles/mixins.pcss";

  .main-bg{
    background: url(../images/bg/main-bg.png);
    background-size: cover;
    display: flex;
    align-items: center;
  }
  .sections {
    background-color: rgba(255, 255, 255, 0.9);
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
    background:
      linear-gradient(#fff,#fff),
      linear-gradient(#fff,#fff),
      linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    background-position:center;
    background-size: 50% 10%, 10% 50%, cover; /*thickness = 2px, length = 50% (25px)*/
    background-repeat:no-repeat;

    border-radius: 50%;
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

  .about__list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .about__list-elem {
    display: flex;
    flex: 1 1 45%;
    justify-content: flex-start;
    align-items: center;
    &:nth-child(even) {
      padding-left: 2%;
    }
    &:nth-child(odd) {
      padding-right: 2%;
    }
    @include phones {
      flex: 1 1 100%;
      &:nth-child(even) {
        padding-left: 0;
      }
      &:nth-child(odd) {
        padding-right: 0;
      }
    }
  }

  .skills-category {
    display: flex;
  }
  
</style>
