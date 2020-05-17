<template lang="pug">
    .works-list__wrapper
        ul.works-list
            li.works-list__item
                .works-list__add-wrapper
                    .works-list__add-btn
                    .works-list__add-text Добавить работу
            li.works-list__item
                .works-list__work.work-preview
                    .work-preview__pic-wrapper
                        img(src="~images/works/1.jpg").work-preview__pic
                    .work-preview__content
                        .work-preview__title Сайт школы образования
                        .work-preview__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .work-preview__link-wrapper
                            .work-preview__link http://loftschool.ru
                        .work-preview__btns 
                            a(href="").work-preview__btn Править
                                SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--blue", name = "pencil")
                            a(href="").work-preview__btn Удалить
                                SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--red", name = "remove")
            li.works-list__item
                .works-list__work.work-preview
                    .work-preview__pic-wrapper
                        img(src="~images/works/2.jpg").work-preview__pic
                    .work-preview__content
                        .work-preview__title Сайт школы образования 2
                        .work-preview__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .work-preview__link-wrapper
                            .work-preview__link http://loftschool.ru
                        .work-preview__btns 
                            a(href="").work-preview__btn Править
                                SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--blue", name = "pencil")
                            a(href="").work-preview__btn Удалить
                                SvgIcon(className = "work-preview__btn-icon work-preview__btn-icon--red", name = "remove")


</template>

<style lang="postcss" scoped>
    .works-list__wrapper {
        width: 100%;
        display: flex;
    }
    .works-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 32px;
    }
    .works-list__item {
        width: calc(100%/3-20px);
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        min-height: 556px;
        margin-right: 30px;
        margin-bottom: 30px;    
        &:nth-child(3n) {
            margin-right: 0;
        }
    }
    .works-list__add-wrapper {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .works-list__add-btn {
        position: relative;
        width: 40%;
        display: flex;
        background:
        linear-gradient(#fff,#fff),
        linear-gradient(#fff,#fff),
        linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        background-position:center;
        background-size: 50% 2%, 2% 50%, cover; /*thickness = 2px, length = 50% (25px)*/
        background-repeat:no-repeat;
        border-radius: 50%;
        border: 2px solid #fff;
        &:before {
            content: "";
            float: left;
            padding-top: 100%;
        }
    }

    .works-list__add-text {
        margin-top: 30px;
        color: #fff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        width: 30%;
        text-align: center;
    }
    
    .work-preview {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .work-preview__pic-wrapper {
        position: relative;
        height: 35%;
    }

    .work-preview__pic {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        transform: translate(-50%, -50%);
    }

    .work-preview__content {
        padding: 30px;
        height: 65%;
        position: relative;
    }

    .work-preview__title {
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
    }
    .work-preview__text{
        color: rgba(#414c63, 0.7);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        height: 150px;
        overflow: hidden;
    }
    .work-preview__link {
        margin-top: 30px;
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .work-preview__btns {
        margin-top: 36px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .work-preview__btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .work-preview__btn-icon {
        width: 17px;
        height: 17px;
        margin-left: 10px;
        &--blue {
            fill: #383bcf;
        }
        &--red {
            fill: #c92e2e;
        }
    }
    
</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
export default {
    components: {SvgIcon}
}
</script>