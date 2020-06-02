import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});


const btns = {
  template: "#slider-btns",
};
const thumbs = {
  template: "#slider-thumbs",
  
  props: ["works", "currentWork"],
  computed: {
    sortedWorks() {
      var l = this.works.length;
      return [...this.works].splice(l-3, 3);
    }
  },
  methods: {
    enterCb(el, done) {
      const list = el.closest("ul");

      el.classList.add("outside");
      list.style.top = "100px";
      list.classList.add("transition");

      list.addEventListener("transitionend", e => {
        done();
      });
    },

    leaveCb(el, done) {
      el.classList.remove("fade");
      el.classList.add("fade");
    },

    afterCb(el) {
      const list = el.closest("ul");
      list.classList.remove("transition");
      list.style.top = 0;
      el.classList.remove("outside");
    },
    slidePreview(direction) {
     
      switch (direction) {
        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          break;
        case "prev":
          const lastItem = this.works[this.works.length - 1];
          this.works.unshift(lastItem);
          this.works.pop();
          break;
      }
    }
  },
  // watch: {
  //   currentWork(value) {
  //     this.makeInfititeLoopForCurIndex(value);
  //   }
  // }
};

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["currentWork", "works", "currentIndex"],
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    },
  },
  methods : {
    rethrowSlide(direction) {
      this.$refs.thmbs.slidePreview(direction);
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: ["tags"],
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork != undefined ? this.currentWork.techs.split(",") : [];
    },
  },
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value);
    },
  },
  methods: {
    makeInfiniteLoopForIndex(value) {
      const worksAmountFromZero = this.works.length - 1;
      //   if (value > worksAmountFromZero) this.currentIndex = 0;
      //   if (value < 0) this.currentIndex = worksAmountFromZero;
      if (value > worksAmountFromZero) this.currentIndex = worksAmountFromZero;
      if (value < 0) this.currentIndex = 0;
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
      this.$refs.dspl.rethrowSlide(direction);
    },
    // makeArrWithRequireImages(array) {
    //   return array.map((item) => {
    //     const requirePic = require(`../images/${item.photo}`);
    //     item.photo = requirePic;
    //     return item;
    //   });
    // },
    makeArrWithUploadedImages(array) {
      return array.map((item) => {
        
        item.photo = "https://webdev-api.loftschool.com/"+item.photo;
        return item;
      });
    },
  },
  async created() {
    const { data } = await $axios.get("/works/328");
    // const data1 = require("../data/works.json");
    this.works = this.makeArrWithUploadedImages(data);
  },
});
