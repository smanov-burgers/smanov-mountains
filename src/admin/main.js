import Vue from 'vue';
import router from './router'
import store from './store'
import $axios from './requests';
import vuelidate from 'vuelidate'
store.$axios = $axios;
Vue.use(vuelidate)

import App from './App.vue'

new Vue({
  el: "#app-root",
  router,
  store,
  vuelidate,
  render: h => h(App)
});