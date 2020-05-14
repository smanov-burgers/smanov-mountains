import Vue from 'vue';
import App from './App.vue'

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

new Vue({
  el: "#app-root",
  render: h => h(App)
});