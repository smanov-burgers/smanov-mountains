<template lang="pug">
    .reviews-editor
        h2.reviews-editor__title {{editorTitle}}
        form(@submit.prevent='postReview' method='POST').reviews-editor__form
            .reviews-editor__form-left
                .reviews-editor__avatar.error__wrapper(@drop.prevent='photoChanged' @dragover.prevent='')
                    .reviews-editor__avatar-wrapper(v-if="renderedPhoto.length > 0")
                        img(v-if="renderedPhoto.length > 0" :src="renderedPhoto").file-drop__background-pic
                    .reviews-editor__avatar-wrapper(v-else)
                        SvgIcon(className = "reviews-editor__avatar-icon", name = "user")
                    a(@click="$refs.file.click()" type="button").reviews-editor__avatar-btn Добавить фото
                    input(type="file" @change="photoChanged($event)" ref="file" accept="image/png, image/jpeg").reviews-editor__input
                    .error(v-if="submitStatus === 'ERROR' && !$v.selectedReview.photo.required") загрузите изображение!
            .reviews-editor__form-right
                .reviews-editor__form-row
                    label.reviews-editor__form-label.error__wrapper Имя автора
                        input.reviews-editor__form-input(v-model.trim="selectedReview.author"  type='text' placeholder='Введите имя')
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedReview.author.required") Введите имя автора!
                    label.reviews-editor__form-label.error__wrapper Титул автора
                        input.reviews-editor__form-input(v-model.trim="selectedReview.occ" type='text' placeholder='Введите титул' )
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedReview.occ.required") Введите титул автора!
                .reviews-editor__form-row
                    label.reviews-editor__form-label.error__wrapper Отзыв
                        textarea.reviews-editor__form-input.reviews-editor__form-textarea(v-model.trim="selectedReview.text" placeholder='Введите отзыв' rows="4")
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedReview.text.required") Введите отзыв!
                .reviews-editor__form-btns
                    input(@click="cancelEditor").reviews-editor__form-btn.btn-cancel(name='' type='button' value='Отмена')
                    input.reviews-editor__form-btn.btn-save(name='' :disabled="submitStatus === 'PENDING'" type='submit' value='Сохранить')
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "../../../styles/blocks/error.pcss";

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
    width: 100%;
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
  border: none;
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
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.file-drop__background-pic {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: flex;
}
.reviews-editor__avatar-icon {
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
.reviews-editor__input {
  display: none;
}
</style>

<script>
import SvgIcon from "../util/svg-icon.vue";
import { required, minLength, between } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  components: { SvgIcon },
  data() {
    return {
      submitStatus: null,
      renderedPhoto: "",
    };
  },
  computed: {
    editorTitle: function () {
      return this.selectedReview.id < 0
        ? "Добавление Отзыва"
        : "Редактирование Отзыва";
    },
  },
  props: {
    selectedReview: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  validations: {
    selectedReview: {
      author: {
        required,
      },
      occ: {
        required,
      },
      text: {
        required,
      },
      photo: {
        required,
      },
    },
  },
  mounted() {
    this.renderedPhoto =
      this.selectedReview.photo.length > 0
        ? "https://webdev-api.loftschool.com/" + this.selectedReview.photo
        : "";
  },
  methods: {
    ...mapActions("reviews", ["upsertReview", "closeReviewInEditor"]),
    async postReview() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        try {
          await this.upsertReview(this.selectedReview);
        } catch (error) {
          // handling error
        } finally {
          this.submitStatus = "OK";
        }
      }
    },
    async cancelEditor() {
      try {
        await this.closeReviewInEditor();
      } catch (error) {
        // handling error
      }
    },
    photoChanged() {
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.selectedReview.photo = files[0];
      this.renderImageFile(files[0]);
    },
    renderImageFile(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        throw new Errow("Ошибка при чтении файла");
      }
    },
  },
};
</script>
