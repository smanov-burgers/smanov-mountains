import Vue from 'vue';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import App from './App.vue'

new Vue({
  el: "#app-root",
  render: h => h(App)
});