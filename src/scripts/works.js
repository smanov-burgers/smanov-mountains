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
  data() {
    return {
      sortedWorks: [...this.works].slice(2),
      currentPreviewIdx: 2,
      currentWorkIdx: 0
    }
  },
  props: ["works", "currentWork"],

  methods: {

    slidePreview(direction, cIdx) {
      switch (direction) {
        case "next":

          if (this.currentPreviewIdx == 0) {
            this.sortedWorks.unshift([...this.works].reverse()[cIdx]);
            this.sortedWorks.pop();
          }
          else {
            this.currentPreviewIdx--;
          }

          break;
        case "prev":
          if (this.currentPreviewIdx == 2) {
            this.sortedWorks.push([...this.works].reverse()[cIdx]);
            this.sortedWorks.shift();
          }
          else {
            this.currentPreviewIdx++;
          }
          break;
      }

    }
  },
  mounted: function () {
    console.log(this.works.map(z=>z.id));
    console.log([...this.works].reverse().map(z=>z.id));
    console.log(this.sortedWorks.map(z=>z.id));
    console.log(this.currentWork.id);
  }
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
      const works = [...this.works].reverse();
      return works;
    },
  },
  methods: {
    rethrowSlide(direction, cIdx) {
      this.$refs.thmbs.slidePreview(direction, cIdx);
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
      // if (value > worksAmountFromZero) this.currentIndex = 0;
      // if (value < 0) this.currentIndex = worksAmountFromZero;
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
      if(!(this.currentIndex < 0) && !(this.currentIndex> this.works.length - 1 ))
      this.$refs.dspl.rethrowSlide(direction,this.currentIndex);
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

        item.photo = "https://webdev-api.loftschool.com/" + item.photo;
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
