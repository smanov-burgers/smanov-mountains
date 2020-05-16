<template lang="pug">
  .admin-wrapper
    header.header
      .header__left
        .header__user
          img(src="images/content/user.jpg").header__user-icon
      .header__right
        .header__user-name Владимир Астаханов
        .header__page-title Панель администрированияя
        .header__logout
          a(href="").logout-btn Выйти
    nav.nav
      - var menu = ["Обо мне", "Работы", "Отзывы"]
      ul.nav__list
        each item in menu
          li.nav__item
            a(href="").nav__link #{item}
    
    .sections
      section.section.about
        .section__head
          h1.page__title Блок «Обо мне»
          a.btn-add.about__btn-add Добавить группу
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
        .works__edit.new-work
          h2.new-work__title Редактирование Работы
          form.new-work__form
            .new-work__form-left
              .new-work__file-input
            .new-work__form-right
              .new-work__form-row
                label.new-work__form-label Название
                  input.new-work__form-input(type='text' placeholder='Дизайн сайта для автосалона Porsche' required='')
              .new-work__form-row
                label.new-work__form-label Ссылка
                  input.new-work__form-input(type='text' placeholder='https://www.porsche-pulkovo.ru' required='')
              .new-work__form-row
                label.new-work__form-label Описание
                  input.new-work__form-input.new-work__form-textarea(type='textarea' placeholder='Введите описание' required='')
              .new-work__form-row
                label.new-work__form-label Добавление тега
                  input.new-work__form-input(type='text' placeholder='Введите тег' required='')
              .new-work__form-row
                .new-work__tags
                  ul.tags
                    li.tags__item HTML
            .new-work__form-btns
              input.new-work__form-btn.btn-cancel(name='' type='reset' value='Отмена')
              input.new-work__form-btn.btn-save(name='' type='submit' value='Сохранить')
        .works__list-wrapper
          ul.works__list
            li.works__list-item
              .add
                a.btn-add.works__list-add Добавить работу
            li.works__list-item
              .work-preview
                .work-preview__pic
                .work-preview__title Сайт школы образования
                .work-preview__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="http://loftschool.ru").work-preview__link http://loftschool.ru
                .work-preview__btns
                  a(href="").work-preview__btn.btn Править
                  a(href="").work-preview__btn.btn Удалить

      section.reviews
        h2.new-work__title Новый отзыв
          form.new-work__form
            .new-work__form-left
              .new-work__file-input
            .new-work__form-right
              .new-work__form-row
                label.new-work__form-label Название
                  input.new-work__form-input(type='text' placeholder='Дизайн сайта для автосалона Porsche' required='')
              .new-work__form-row
                label.new-work__form-label Ссылка
                  input.new-work__form-input(type='text' placeholder='https://www.porsche-pulkovo.ru' required='')
              .new-work__form-row
                label.new-work__form-label Описание
                  input.new-work__form-input.new-work__form-textarea(type='textarea' placeholder='Введите описание' required='')
              .new-work__form-row
                label.new-work__form-label Добавление тега
                  input.new-work__form-input(type='text' placeholder='Введите тег' required='')
              .new-work__form-row
                .new-work__tags
                  ul.tags
                    li.tags__item HTML
            .new-work__form-btns
              input.new-work__form-btn.btn-cancel(name='' type='reset' value='Отмена')
              input.new-work__form-btn.btn-save(name='' type='submit' value='Сохранить')
</template>
<style lang="postcss">

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .admin-wrapper {
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
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

    &__user-name {
      color: #fff;
      font-family: "Open Sans";
      font-weight: 700;
      font-size: 18px;
    }
    &__page-title {
      color: rgba(#fff, 0.5);
      font-family: "Open Sans";
      font-weight: 400;
      font-size: 14px;
    }
  }

  .logout-btn {
      color: rgba(#fff, 0.7);
      font-family: "Open Sans";
      font-weight: 400;
      font-size: 16px;
      text-decoration: underline;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
    &__link {
      color: #414c63;
      font-family: "Open Sans";
      font-weight: 400;
      font-size: 16px;
      text-decoration: none;
    }
  }

  .page__title {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 21px;
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .section {
    padding-left: 60px;
    padding-right: 58px;
    .section__head {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .about__list {
    display: flex;
  }

  .skills-category {
    display: flex;
  }
  
</style>
