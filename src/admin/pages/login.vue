<template lang="pug">
    #loginForm.login-overlay
        form(@submit.prevent='login' method='POST').login-form
            a.login__close
                SvgIcon(className = "login__close-icon", name = "remove")
            .login__title Авторизация
            .login__row
                label.login__label.error__wrapper
                    .login__span Логин
                    .login__input-wrapper
                        SvgIcon(className = "login__icon", name = "user")
                        input.login__input(v-model.trim="user.name" type='text' placeholder='Terminator_2000' )
                        .error(v-if="submitStatus === 'ERROR' && $v.user.name.$error") Введите логин!
                        
                        
            .login__row
                label.login__label
                    .login__span Пароль
                    .login__input-wrapper.error__wrapper
                        SvgIcon(className = "login__icon", name = "key")
                        input.login__input(v-model="user.password" type='password' placeholder='**********' )
                        .error(v-if="submitStatus === 'ERROR' && $v.user.password.$error") Введите пароль!
            .login__btns
                input.login__btn(name='' ref="loginBtn" :disabled="submitStatus === 'PENDING'" type='submit' value='Отправить')
</template>

<script>
import $axios from "../requests";
import SvgIcon from "../components/util/svg-icon.vue";
import { mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  components: { SvgIcon },
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      submitStatus: null,
    };
  },
  validations: {
    user: {
      name: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("customError", ["displayError"]),
    async login() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        try {
          const response = await $axios.post("/login", {
            name: this.user.name,
            password: this.user.password,
          });
          const token = response.data.token;

          localStorage.setItem("token", token);
          $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

          this.$router.replace("/");
        } catch (error) {
          var customError;
          if (error.response.status == 403) {
            customError = "Неправильное имя пользователя или пароль";
          } else {
            customError = "Произошла непредвиденная ошибка";
          }
          this.displayError(customError);
        }
      }
    },
  },
};
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";
@import "../../styles/blocks/error.pcss";

.login {
  padding: 0;
}
.login-overlay {
  display: flex;
  background-color: rgba(#2d3c4e, 0.9);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
}
.login-form {
  background: #fff;
  width: 40%;
  min-width: 560px;
  min-height: 520px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @include phones {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
.login__close {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  @include phones {
    right: 35px;
    top: 35px;
  }
}
.login__close-icon {
  height: 100%;
  width: 100%;
  fill: #414c63;
}
.login__title {
  text-align: center;
  color: #414c63;
  font-family: "Open Sans";
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  margin-top: 60px;
  margin-bottom: 34px;
  @include phones {
    display: flex;
    justify-content: center;
  }
}
.login__row {
  display: flex;
  justify-content: flex-start;
  padding: 0 13.5%;
  @include phones {
    padding: 0;
  }
}
.login__label {
  color: rgba(#414c63, 0.5);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  flex-direction: column;
  width: 100%;

  margin-bottom: 10px;
}
.login__icon {
  width: 28px;
  height: 28px;
  fill: rgba(#414c63, 0.3);
}
.login__span {
  margin-left: 48px;
}
.login__input-wrapper {
  display: flex;
  border-bottom: 1px solid #000;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.login__input {
  outline: none;
  border: none;
  width: 100%;
  color: #414c63;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-left: 20px;
}
.login__btns {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.login__btn {
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
  @include phones {
    padding: 30px 60px;
  }
}
</style>
