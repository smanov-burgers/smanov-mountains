import Vue from "vue";
import {
    Hooper,
    Slide,
    Navigation as HooperNavigation
    } from 'hooper';
import 'hooper/dist/hooper.css';

new Vue({
    el: "#reviewsSlider",
    template: "#reviews-slider",
    components: {
        Hooper, Slide, HooperNavigation
    },
    data() {
        return {
          reviews: []
        };
      },
    methods: {
        makeArrWithRequireImages(array) {
            return array.map((item) => {
                const requirePic = require(`../images/${item.avatar}`);
                item.avatar = requirePic;
                return item;
            });
        },
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequireImages(data);
    }
});