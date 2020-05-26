<template lang="pug">
    .works-editor
        h2.works-editor__title Редактирование Работы
        form(@submit.prevent='postWork' method='POST').works-editor__form
            .works-editor__form-left
                .works-editor__file-drop-area.file-drop__area.error__wrapper
                    .file-drop__hint Перетащите или загрузите для загрузки изображения
                    button(type="button").file-drop__fake-button Загрузить
                    input(type="file" @change="workPicChanged($event)" accept="image/png, image/jpeg").file-drop__input
                    .error(v-if="submitStatus === 'ERROR' && !$v.workPic.required") загрузите изображение!
            .works-editor__form-right
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Название
                        input.works-editor__form-input(v-model.trim="$v.workName.$model" type='text' placeholder='Дизайн сайта для автосалона Porsche' )
                        .error(v-if="submitStatus === 'ERROR' && !$v.workName.required") Введите имя автора!
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Ссылка
                        input.works-editor__form-input(v-model.trim="$v.workLink.$model" type='text' placeholder='https://www.porsche-pulkovo.ru')
                        .error(v-if="submitStatus === 'ERROR' && !$v.workLink.required") Введите ссылку!
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Описание
                        textarea.works-editor__form-input.works-editor__form-textarea(v-model.trim="$v.workDesc.$model" placeholder='Введите описание' rows="4")
                        .error(v-if="submitStatus === 'ERROR' && !$v.workDesc.required") Введите описание!
                .works-editor__form-row
                    label.works-editor__form-label Добавление тега
                        input.works-editor__form-input(type='text' placeholder='Введите тег')
                .works-editor__form-row
                    .works-editor__tags
                        ul.tags
                            li.tags__item HTML
                                a.tags__cross
                            li.tags__item Vue
                                a.tags__cross
                .works-editor__form-btns
                    input.works-editor__form-btn.btn-cancel(name='' type='reset' value='Отмена')
                    input.works-editor__form-btn.btn-save(name='' type='submit' value='Сохранить')
</template>

<style lang="postcss" scoped>
    @import "../../../styles/mixins.pcss";
    @import "../../../styles/blocks/error.pcss";

    .works-editor {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        background: #fff;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        margin-bottom: 32px;
    }

    .works-editor__title {
        color: #414c63;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 25px;
        padding-top: 30px;
        padding-left: 15px;
        border-bottom: 1px solid rgba(#1f232d, 0.15);
    }
    .works-editor__form {
        display: flex;
        @include tablets {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-left: 80px;
            padding-right: 80px;
        }
        @include phones {
            padding-left: 0;
            padding-right: 0;
        }
    }
    .works-editor__form-left {
        flex: 1;
        display: flex;
        width: 50%;
        padding: 30px;
        max-height: 400px;
        @include tablets {
            width: 100%;
        }
    }
    .works-editor__form-right {
        flex: 1;
        display: flex;
        width: 50%;
        flex-direction: column;
        padding-top: 30px;
        padding-right: 30px;
        @include tablets {
            width: 100%;
        }
        @include phones {
            padding-left: 30px;
        }
    }

    .works-editor__form-row {
        display: flex;
        padding-bottom: 30px;
    }

    .works-editor__form-btns {
        display: flex;
        padding-bottom: 30px;
        justify-content: flex-end;
        @include tablets {
            justify-content: center;
        }
    }

    .works-editor__form-label {
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid #000;
    }
    .works-editor__form-input {
        outline: none;
        border:  none;
        width: 100%;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 10px;
    }

    .works-editor__form-textarea {
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

    .file-drop__area {
        display: flex;
        width: 100%;
        border: 1px dashed #a1a1a1;
        background-color: #dee4ed;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 86px;
        padding-bottom: 60px;
        padding-left: 30%;
        padding-right: 30%;
        @include phones {
            padding-left: 15%;
            padding-right: 15%;
        }
    }
    .file-drop__hint {
        opacity: 0.5;
        color: rgba(#414c63,0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 33.89px;
        text-align: center;
    }
    .file-drop__fake-button {
        border-radius: 25px;
        background-color: #ffffff;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 48px;
        text-transform: uppercase;
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 20px;
    }

    .file-drop__input{
        display: none;
    }

    .tags{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .tags__item {
        display: inline-flex;
        border-radius: 22px;
        background-color: rgba(#859fc2,0.1);
        font-family: "Open Sans";
        color: rgba(#464d62, 0.7);
        font-size: 15px;
        font-weight: 700;
        padding: 10px 16px;
        padding-right: 20px;
        margin-right: 16px;
        align-items: center;
    }
    
    .tags__cross {
        display: flex;
        width: 12px;
        height: 12px;
        opacity: 0.5;
        position: relative;
    }
    .tags__cross:hover {
        opacity: 1;
    }
    .tags__cross:before, .tags__cross:after {
        position: absolute;
        left: 0.9375rem;
        content: " ";
        height: 100%;
        width: 2px;
        background-color: #464d62;
    }
    .tags__cross:before {
        transform: rotate(45deg);
    }
    .tags__cross:after {
        transform: rotate(-45deg);
    }
    
</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    components: {SvgIcon},
    data() {
        return {
            workName: '',
            workLink: '',
            workDesc: '',
            workPic: '',
            submitStatus: null
        }
    },
    validations: {
        workName: {
            required
        },
        workLink: {
            required
        },
        workDesc: {
            required
        },
        workPic: {
            required
        }
    },
    methods: {
        postWork() {
            console.log('posting review');

            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                this.submitStatus = 'PENDING'
                setTimeout(() => {this.submitStatus = 'OK'}, 500);
            }
        },
        workPicChanged() {
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.workPic = files[0];
        }
  }
}
</script>