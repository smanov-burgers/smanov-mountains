<template lang="pug">
  .admin-wrapper
    header.header
      .header__left
        .header__user
          //- img(src=require(`images/content/user.jpg`) class=".header__user-icon")
      .header__right
        .header__user-name Владимир Астаханов
        .header__page-title Панель администрированияя
        .header__logout
          a.logout-btn Выйти
    nav.nav
      - var menu = ["Обо мне", "Работы", "Отзывы"]
      ul.nav__list
        each item in menu
          li.nav__item
            a(href="").nav__link #{item}
    .sections
      section.section.about
        h1.section__title Блок «Обо мне»
        a.btn-add.about__btn-add
        ul.about__list
          li.about__list-elem.skills-category
            .about__list-row.skills-category__row
              input.skills-category__input.skills-category__title(type='text' placeholder='Название новой группы' required='')
              .skills-category__btns
                a(href="").skills-category__btn
                a(href="").skills-category__btn
            .about__list-row.skills-category__row
              table.skills-category__skill-list.skill
                tr.skill__row
                  td.skill__cell
                    input.skill__input(type='text' placeholder='Git' required='')
                  td.skill__cell
                    label.input_mask--prc
                      input.skill__input(type='text' placeholder='100' required='')
                      | %
                  td.skill__cell
                    .skill__btns
                      a(href="").skill__btn
                      a(href="").skill__btn
            .about__list-row.skills-category__row
              input.skills-category__input.skills-category__new-title(type='text' placeholder='Новый навык' required='')
              label.input_mask--prc
                input.skills-category__input.skills-category__new-prc(type='text' placeholder='100' required='')
                | %
              a.btn-add.skills-category__btn-add
            
      section.works
      section.reviews
</template>
<style lang="postcss">
  .admin-wrapper {
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__left {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
