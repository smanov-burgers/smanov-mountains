<template lang="pug">
    tr(v-if="editmode === false").skill__row
        td.skill__cell
            .skill__input {{skill.title}}
        td.skill__cell
            .skill__input {{skill.percent}} %
        td.skill__cell 
            a(@click.prevent="editmode = true").skill__btn
                SvgIcon( className = "skill__btn-icon", name = "pencil")
            a(@click.prevent="removeExistedSkill").skill__btn
                SvgIcon( className = "skill__btn-icon", name = "trash")
    tr(v-else).skill__row
        td.skill__cell 
            input.skill__input.skill__input--active(type='text' placeholder='навык' v-model="editedSkill.title" required='')
        td.skill__cell 
            .input--prc-wrapper
                input.skill__input.skill__input--active.input_mask--prc(type='text' placeholder='0' required='' v-model="editedSkill.percent")
        td.skill__cell
            a(@click.prevent="editExistedSkill").skill__btn
                SvgIcon( className = "skill__btn-icon", name = "tick")
            a(@click.prevent="editmode = false").skill__btn
                SvgIcon( className = "skill__btn-icon", name = "remove") 
        
</template>

<style lang="postcss" scoped>
    @import "../../../styles/mixins.pcss";

     
    .skill__row {
        display: flex;
    }

    .skill__cell {
        display: flex;
        position: relative;
        align-items: center;
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
        border-bottom: 1px solid transparent;
        color: #414c63;
        font-family: "Open Sans";
        font-weight: normal;
        font-size: 16px;
        outline: none;
        padding: 10px;
        width: 100%;
        &--active {
            border: none;
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

</style>

<script>
import SvgIcon from "../util/svg-icon.vue"
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill }
    };
  },
  components: {SvgIcon},
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {

      }
    }
  }
};
</script>