<template lang="pug">
    .works-editor
        //- pre {{selectedWork}}
        h2.works-editor__title {{editorTitle}}
        form(@submit.prevent='postWork' method='POST').works-editor__form
            .works-editor__form-left
                .works-editor__file-drop-area.file-drop__area.error__wrapper(@drop.prevent='photoChanged' @dragover.prevent='')
                    img(v-if="renderedPhoto.length > 0" :src="renderedPhoto").file-drop__background-pic
                    .file-drop__hint Перетащите или загрузите для загрузки изображения
                    button(@click="$refs.file.click()" type="button").file-drop__fake-button Загрузить
                    input(@change="photoChanged($event)" ref="file" type="file" accept="image/png, image/jpeg").file-drop__input
                    .error(v-if="submitStatus === 'ERROR' && !$v.selectedWork.photo.required") загрузите изображение!
            .works-editor__form-right
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Название
                        input.works-editor__form-input(v-model.trim="selectedWork.title" type='text' placeholder='Введите название' )
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedWork.title.required") Введите название!
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Ссылка
                        input.works-editor__form-input(v-model.trim="selectedWork.link" type='text' placeholder='Введите ссылку')
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedWork.link.required") Введите ссылку!
                .works-editor__form-row
                    label.works-editor__form-label.error__wrapper Описание
                        textarea.works-editor__form-input.works-editor__form-textarea(v-model.trim="selectedWork.description" placeholder='Введите описание' rows="4")
                        .error(v-if="submitStatus === 'ERROR' && !$v.selectedWork.description.required") Введите описание!
                .works-editor__form-row
                    label.works-editor__form-label Добавление тега
                        input.works-editor__form-input(v-model.trim="selectedWork.techs" type='text' placeholder='Введите теги')
                .works-editor__form-row
                    .works-editor__tags
                        ul(v-show="tags.length > 0").tags
                            li(v-for="tag in tags").tags__item {{tag}}
                                a(@click.prevent="removeTag(tag)").tags__cross
                           
                .works-editor__form-btns
                    input(@click="cancelEditor").works-editor__form-btn.btn-cancel(name='' type='button' value='Отмена')
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
  border: none;
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
  position: relative;
  @include phones {
    padding-left: 15%;
    padding-right: 15%;
  }
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
}
.file-drop__hint {
  opacity: 0.5;
  color: rgba(#414c63, 0.5);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 700;
  line-height: 33.89px;
  text-align: center;
  z-index: 1;
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
  z-index: 1;
}

.file-drop__input {
  display: none;
}

.tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.tags__item {
  display: inline-flex;
  border-radius: 22px;
  background-color: rgba(#859fc2, 0.1);
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
.tags__cross:before,
.tags__cross:after {
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
    tags: function () {
      var t = this.selectedWork.techs.split(",");
      if (t[0] == "" && t.length == 1) return [];
      return t;
    },
    editorTitle: function () {
      return this.selectedWork.id < 0
        ? "Добавление Работы"
        : "Редактирование Работы";
    },
  },
  props: {
    selectedWork: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  validations: {
    selectedWork: {
      title: {
        required,
      },
      link: {
        required,
      },
      description: {
        required,
      },
      photo: {
        required,
      },
    },
  },
  mounted() {
    this.renderedPhoto =
      this.selectedWork.photo.length > 0
        ? "https://webdev-api.loftschool.com/" + this.selectedWork.photo
        : "";
  },
  methods: {
    ...mapActions("works", ["upsertWork", "closeWorkInEditor"]),
    async postWork() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        try {
          await this.upsertWork(this.selectedWork);
        } catch (error) {
          // handling error
        } finally {
          this.submitStatus = "OK";
        }
      }
    },
    async cancelEditor() {
      try {
        await this.closeWorkInEditor();
      } catch (error) {
        // handling error
      }
    },
    removeTag(tagToRemove) {
      console.log(tagToRemove);
      var newTags = this.selectedWork.techs.split(",");
      for (var i = 0; i < newTags.length; i++) {
        if (newTags[i].trim() == tagToRemove.trim()) {
          newTags.splice(i, 1);
        }
      }
      this.selectedWork.techs = newTags.join(",");
    },
    photoChanged() {
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.selectedWork.photo = files[0];
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
