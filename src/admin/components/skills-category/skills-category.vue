<template lang="pug">
    form(action="/skills" method="POST").skills-category
        .skills-category__row
            input.skills-category__input.skills-category__title(type='text' placeholder='Название новой группы' required='')
            .skills-category__btns
                a(href="").skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--green", name = "tick")
                a(href="").skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--red", name = "remove")
        .skills-category__row
            table.skills-category__skill-list.skill
                tr.skill__row
                    td.skill__cell
                            input.skill__input(type='text' placeholder='Git' required='')
                    td.skill__cell
                        .input--prc-wrapper
                            input.skill__input.input_mask--prc(type='text' placeholder='100' required='')
                    td.skill__cell.skill__cell--pull-right
                        .skill__btns
                            a(href="").skill__btn
                                SvgIcon(className = "skill__btn-icon", name = "pencil")
                            a(href="").skill__btn
                                SvgIcon(className = "skill__btn-icon", name = "trash")

                tr.skill__row
                    td.skill__cell
                            input.skill__input(type='text' placeholder='Git' required='')
                    td.skill__cell
                        .input--prc-wrapper
                            input.skill__input.input_mask--prc(type='text' placeholder='100' required='')
                    td.skill__cell.skill__cell--pull-right
                        .skill__btns
                            a(href="").skill__btn
                                SvgIcon(className = "skill__btn-icon", name = "pencil")
                            a(href="").skill__btn
                                SvgIcon(className = "skill__btn-icon", name = "trash")
        .skills-category__row
            input.skills-category__input.skills-category__new-title(type='text' placeholder='Новый навык' required='')
            .input--prc-wrapper.skills-category__new-prc-wrapper
                input.skills-category__input.skills-category__new-prc(type='text' placeholder='100' required='')
            .skills-category__btn-add
                a.btn-add.
</template>

<style lang="postcss" scoped>
    @import "../../../styles/mixins.pcss";

    .skills-category {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
        margin-bottom: 30px;
        min-height: 387px;
        background: #fff;
        padding-bottom: 30px;
        @include phones {
            margin-bottom: 10px;
        }
    }
    .skills-category__skill-list {
        width: 100%;
    }
    .skills-category__row {
        display: flex;
        width: 100%;
        padding-left: 30px;
        padding-right: 20px;
        padding-top: 14px;
        padding-bottom: 14px;
        position: relative;
        
        &:first-child {
            &:after {
                position: absolute;
                content: '';
                display: block;
                border-bottom: 1px solid rgba(#1f232d, 0.15);
                width: calc(100%-40px);
                left: 20px;
                bottom: 0;
            }
        }
        &:last-child {
            margin-top: auto;
            justify-content: flex-end;
            align-items: flex-end;
        }
        
    }
    .skills-category__input{
        border: none;
        border-bottom: 1px solid #000;
        color: #414c63;
        font-family: "Open Sans";
        font-weight: bold;
        font-size: 18px;
        line-height: 34px;
        outline: none;
        width: 60%;
        &:placeholder {
            color: rgba(#414c63, 0.51);
        }
    }
    .skills-category__btns{
       display: flex;
       margin-left: auto;
       justify-content: center;
       align-items: center;
    }
    .skills-category__btn {
        display: flex;
        width: 15px;
        height: 12px;
        margin-right: 10px;
    }
    .skills-category__btn-icon {
        width: 100%;
        height: 100%;

        &--green {
            fill: #00d70a;
        }

        &--red {
            fill: #bf2929;
        }
    }

    .skill__row {
        display: flex;
    }

    .skill__cell {
        display: flex;
        position: relative;
        flex: 1;
        &:nth-child(1) {
            flex: 1 1 273px;
            margin-right: 20px;
        }
        &:nth-child(2) {
            flex: 0 0 74px;
        }
        &:nth-child(3) {
            justify-content: flex-end;
            padding-left: 60px;
        }
    }

    .skill__input {
        border: none;
        color: rgba(#414c63);
        font-family: "Open Sans";
        font-weight: normal;
        font-size: 16px;
        outline: none;
        padding: 10px;
        width: 100%;
        &:focus {
            border-bottom: 1px solid #000;
        }
    }

    .skill__btns {
        display: flex;
        align-items: center;
    }

    .skill__btn-icon {
        display: flex;
        width: 16px;
        height: 16px;
        fill: #a0a5b1;
        margin-right: 10px;
    }

    .input--prc-wrapper {
        position: relative;
        &:before {
            content: "%";
            display: flex;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }  
    }

    .skills-category__new-title {
        width: 50%;
        
    }

    .skills-category__new-prc-wrapper {
        flex: 0 0 74px;
        border-bottom: 1px solid #000;
        margin-left: 20px;
    }

    .skills-category__new-prc {
        margin-left: 10px;
        flex: 0 0 74px;
        border: none;
    }

    .skills-category__btn-add {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        margin-left: 40px;
    }

</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
export default {
    components: {SvgIcon}
}
</script>