<template lang="pug">
    .reviews-list__wrapper
        ul.reviews-list
            li.reviews-list__item
                .reviews-list__add-wrapper
                    .reviews-list__add-btn
                    .reviews-list__add-text Добавить отзыв
            li.reviews-list__item
                .reviews-list__work.work-review
                    //- .work-review__pic-wrapper
                    .work-review__reviwer
                        .work-review__reviwer-avatar
                            img(src="~images/content/reviewer1.png").work-review__reviwer-pic
                        .work-review__reviwer-desc
                            .work-review__reviwer-name Владимир Сабанцев
                            .work-review__reviwer-title Преподаватель
                    .work-review__content
                        .work-review__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .work-review__btns 
                            a(href="").work-review__btn Править
                                SvgIcon(className = "work-review__btn-icon work-review__btn-icon--blue", name = "pencil")
                            a(href="").work-review__btn Удалить
                                SvgIcon(className = "work-review__btn-icon work-review__btn-icon--red", name = "remove")
            


</template>

<style lang="postcss" scoped>
    .reviews-list__wrapper {
        width: 100%;
        display: flex;
    }
    .reviews-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 32px;
    }
    .reviews-list__item {
        width: calc(100%/3-20px);
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        min-height: 480px;
        margin-right: 30px;
        margin-bottom: 30px;    
        &:nth-child(3n) {
            margin-right: 0;
        }
    }
    .reviews-list__add-wrapper {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .reviews-list__add-btn {
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

    .reviews-list__add-text {
        margin-top: 30px;
        color: #fff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        width: 30%;
        text-align: center;
    }
    
    .work-review {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 30px;
    }

    .work-review__reviwer {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid rgba(#1f232d, 0.15);
        padding-bottom: 30px;
    }
    
    .work-review__reviwer-avatar {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .work-review__reviwer-pic {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .work-review__reviwer-name{
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
    }

    .work-review__reviwer-title {
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }

    .work-review__pic {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        transform: translate(-50%, -50%);
    }

    .work-review__content {
        height: auto;
        position: relative;
        height: 80%;
    }

    .work-review__text{
        color: rgba(#414c63, 0.7);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        height: 150px;
        overflow: hidden;
        min-height: 75%;
        margin-top: 30px;
    }
    .work-review__link {
        margin-top: 30px;
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .work-review__btns {
        margin-top: 36px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .work-review__btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }
    .work-review__btn-icon {
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