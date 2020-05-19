<template lang="pug">
    .reviews-editor
        h2.reviews-editor__title Новый отзыв
        form(action="/login" method="POST").reviews-editor__form
            .reviews-editor__form-left
                .reviews-editor__avatar
                    .reviews-editor__avatar-wrapper
                        SvgIcon(className = "reviews-editor__avatar-icon", name = "user")
                    a.reviews-editor__avatar-btn Добавить фото
            .reviews-editor__form-right
                .reviews-editor__form-row
                    label.reviews-editor__form-label Имя автора
                        input.reviews-editor__form-input(type='text' placeholder='Ковальчук Дмитрий' required='')
                    label.reviews-editor__form-label Титул автора
                        input.reviews-editor__form-input(type='text' placeholder='Основатель Loftschool' required='')
                .reviews-editor__form-row
                    label.reviews-editor__form-label Отзыв
                        textarea.reviews-editor__form-input.reviews-editor__form-textarea(placeholder='Введите отзыв' required='' rows="4")
                .reviews-editor__form-btns
                    input.reviews-editor__form-btn.btn-cancel(name='' type='reset' value='Отмена')
                    input.reviews-editor__form-btn.btn-save(name='' type='submit' value='Сохранить')
</template>

<style lang="postcss" scoped>
    @import "../../../styles/mixins.pcss";

    .reviews-editor {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        background: #fff;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        margin-bottom: 32px;
        
    }

    .reviews-editor__title {
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 25px;
        padding-top: 30px;
        padding-left: 15px;
        border-bottom: 1px solid rgba(#1f232d, 0.15);
    }
    .reviews-editor__form {
        display: flex;
         @include phones {
            flex-wrap: wrap;
        }
    }
    .reviews-editor__form-left {
        display: flex;
        width: 30%;
        padding: 30px;
        max-height: 400px;
        @include tablets {
            padding: 0;
            width: 35%;
        }
        @include phones {
            width: 100%
        }
    }
    .reviews-editor__form-right {
        display: flex;
        width: 60%;
        flex-direction: column;
        padding-top: 30px;
        padding-right: 30px;
        @include tablets {
            width: 65%;
        }
        @include phones {
            width: 100%;
            padding-right: 0;
        }
    }

    .reviews-editor__form-row {
        display: flex;
        padding-bottom: 30px;
        @include tablets {
            flex-direction: column;
        }
    }

    .reviews-editor__form-btns {
        display: flex;
        padding-bottom: 30px;
        justify-content: flex-end;
        @include tablets {
            flex-direction: row;
        }
    }

    .reviews-editor__form-label {
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        flex-direction: column;
        width: 100%;
        margin-right: 30px;
    }
    .reviews-editor__form-input {
        outline: none;
        border:  none;
        width: 100%;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #000;
    }

    .reviews-editor__form-textarea {
        border: 1px solid rgba(#414c63, 0.2);
        height: 4em;
        text-align: left;
        min-height: 150px;
        padding: 20px;
    }

    .btn-cancel {
        border: none;
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 33.89px;
        background: transparent;
    }

    .btn-save {
        border-radius: 35px;
        background-color: #fff;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 24px 40px;
        margin-left: 40px;
    }

    .reviews-editor__avatar {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        padding-left: 10%;
        padding-right: 10%;
        @include phones {
            padding: 16%;
        }
    }
    .reviews-editor__avatar-wrapper {
        background-color: #dee4ed;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .reviews-editor__avatar-icon{
        width: 100%;
        height: 100%;
        fill: #fff;
        touch: #fff;
        transform: scale(0.7);
    }
    .reviews-editor__avatar-btn {
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 33.89px;
        margin-top: 20px;
    }

    
</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
export default {
    components: {SvgIcon}
}
</script>