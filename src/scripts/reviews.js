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
            reviews: [],
            hooperSettings: {
                itemsToShow: 1,
                itemsToSlide: 1,
                breakpoints: {
                    321: {
                        itemsToShow: 2,
                        itemsToSlide: 2,
                    }
                }
            }
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