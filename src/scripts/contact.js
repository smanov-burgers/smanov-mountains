import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import { required, email } from "vuelidate/lib/validators";

new Vue({
  el: "#contact-component",
  template: "#contact",
  components: {},
  data() {
    return {
      contactName: "",
      contactEmail: "",
      contactText: "",
      submitStatus: null,
    };
  },
  validations: {
    contactName: {
      required,
    },
    contactEmail: {
      required,
      email,
    },
    contactText: {
      required,
    },
  },
  methods: {
    postContact() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
});
