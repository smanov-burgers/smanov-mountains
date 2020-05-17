<template lang="pug">
    .auth-overlay
        .auth-form
            a.auth__close
                SvgIcon(className = "auth__close-icon", name = "remove")
            .auth__title Авторизация
            .auth__row
                label.auth__label
                    .auth__span Логин
                    .auth__input-wrapper
                        SvgIcon(className = "auth__icon", name = "user")
                        input.auth__input(type='text' placeholder='Terminator_2000' required='')
            .auth__row
                label.auth__label
                    .auth__span Пароль
                    .auth__input-wrapper
                        SvgIcon(className = "auth__icon", name = "key")
                        input.auth__input(type='password' placeholder='**********' required='')
            .auth__btns
                input.auth__btn(name='' type='submit' value='Отправить')
</template>

<style lang="postcss" scoped>
    .auth {
        padding: 0;
    }
    .auth-overlay {
        display: flex;
        background-color: rgba(#2d3c4e, 0.9);
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    .auth-form {
        background: #fff;
        width: 40%;
        min-width: 560px;
        min-height: 520px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .auth__close {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 20px;
        height: 20px;
    }
    .auth__close-icon {
        height: 100%;
        width: 100%;
        fill: #414c63;
    }
    .auth__title {
        text-align: center;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 36px;
        font-weight: 700;
        line-height: 60px;
        margin-top: 60px;
        margin-bottom: 34px;
    }
    .auth__row {
        display: flex;
        justify-content: flex-start;
        padding: 0 13.5%;
    }
    .auth__label {
        color: rgba(#414c63, 0.5);
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        flex-direction: column;
        width: 100%;
    }
    .auth__icon{
        width: 28px;
        height: 28px;
        fill: rgba(#414c63, 0.3);
    }
    .auth__span {
        margin-left: 48px;
    }
    .auth__input-wrapper {
        display: flex;
        border-bottom: 1px solid #000;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    .auth__input {
        outline: none;
        border:  none;
        width: 100%;
        color: #414c63;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-left: 20px;
    }
    .auth__btns {
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }
    .auth__btn {
        border: 0;
        background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
        font-size: 13px;
        text-transform: uppercase;
        border-radius: 40px 5px;
        color: #ffffff;
        font-family: "Open Sans";
        font-weight: 700;
        font-size: 18px;
        padding: 30px 120px;
        cursor: pointer;
    }
</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
export default {
    components: {SvgIcon}
}
</script>