<template lang="pug">
    form(action="/skills" method="POST").skills-category
        .skills-category__row
            input(v-if="isInEditMode === true || category.id < 0" v-model="category.category" type='text' placeholder='Название новой группы' required='').skills-category__input.skills-category__title.skills-category__input--edit
            span(v-else).skills-category__input.skills-category__title {{category.category}}
            .skills-category__btns(v-if="isInEditMode === true")
                a(@click.prevent='renameExistingCategory').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--green", name = "tick")
                a(@click.prevent='isInEditMode=false').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--red", name = "trash")
            .skills-category__btns(v-if="category.id < 0")
                a(@click.prevent='saveNewCategory').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--green", name = "tick")
                a(@click.prevent='deleteNewCategory').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--red", name = "trash")
            .skills-category__btns(v-if="(category.id >= 0 && !isInEditMode)")
                a(@click.prevent='isInEditMode=true').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--blue", name = "pencil")
                a(@click.prevent='deleteExistingCategory').skills-category__btn
                    SvgIcon(className = "skills-category__btn-icon skills-category__btn-icon--red", name = "remove")
        .skills-category__row(v-show="category.hasOwnProperty('id') && category.id > 0")
            table.skills-category__skill-list.skill
                skill(v-for="skl in category.skills" :key="skl.id" :skill="skl")
        .skills-category__row(v-show="category.hasOwnProperty('id') && category.id > 0")
            .skills-category__new-title.error__wrapper
              input.skills-category__input.skills-category__new-title(v-model="skill.title" type='text' placeholder='Новый навык' required='')
              .error(v-if="submitStatus === 'ERROR' && !$v.skill.title.required") Введите описание!

            .input--prc-wrapper.skills-category__new-prc-wrapper.error__wrapper
                input.skills-category__input.skills-category__new-prc(v-model="skill.percent" type='text' placeholder='' required='')
                .error(v-if="submitStatus === 'ERROR' && $v.skill.percent.$invalid && $v.skill.percent.$dirty") Число от 0 до 100! 
            .skills-category__btn-add
                //- a.btn-add
                a(@click.prevent='addNewSkill' :disabled="loading").btn-add
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/blocks/error.pcss";

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
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
  position: relative;

  &:first-child {
    &:after {
      position: absolute;
      content: "";
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
.skills-category__input {
  border: none;
  border-bottom: 1px solid transparent;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 18px;
  line-height: 34px;
  outline: none;
  width: 60%;
  &--edit {
    border-bottom: 1px solid #000;
  }
  &:placeholder {
    color: rgba(#414c63, 0.51);
  }
}
.skills-category__btns {
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

  &--blue {
    fill: #383bcf;
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
  color: #414c63;
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

.btn-add {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  background-position: center;
  background-size: 50% 10%, 10% 50%, cover; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;

  border-radius: 50%;
}
</style>

<script>
import SvgIcon from "../util/svg-icon.vue";
import { mapActions } from "vuex";
import { required, minLength, maxLength, between } from "vuelidate/lib/validators";

export default {
  components: {
    skill: () => import("../skill"),
    SvgIcon,
  },
  data() {
    return {
      loading: false,
      isInEditMode: false,
      submitStatus: null,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id,
      },
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  validations: {
    skill: {
      title: {
        required,
      },
      percent: {
        required,
        between: between(0,100)
      }
    },
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", [
      "deleteCategory",
      "editCategory",
      "appendNewCategory",
    ]),
    ...mapActions("customError", ["displayError"]),
    async addNewSkill() {
      this.loading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      }
      else {
        try {
          await this.addSkill(this.skill);

          this.skill.title = "";
          this.skill.percent = "";
        } catch (error) {
            var customError;
            if (error.response.status == 422) {
              customError = "Введите корректные данные";
            } else {
              customError = "Произошла непредвиденная ошибка";
            }
            this.displayError(customError);
          }
          finally {
            this.loading = false;
            this.submitStatus = "OK";
        }
      }
      
    },
    async deleteExistingCategory() {
      this.loading = true;
      try {
        await this.deleteCategory(this.category);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    async renameExistingCategory() {
      this.loading = true;
      try {
        await this.editCategory(this.category);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
        this.isInEditMode = false;
      }
    },
    async saveNewCategory() {
      this.loading = true;

      try {
        await this.appendNewCategory(this.category.category);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    async deleteNewCategory() {
      this.loading = true;
      try {
        await this.deleteCategory(this.category);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
        this.isInEditMode = false;
      }
    },
  },
};
</script>
