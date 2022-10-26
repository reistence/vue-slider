/*
3- quando il mouse va in hover sullo slider, 
bloccare l'autoplay e farlo riprendere
 quando esce
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      slides: [
        {
          image: "img/01.jpg",
          title: "Svezia",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
        },
        {
          image: "img/02.jpg",
          title: "Svizzera",
          text: "Lorem ipsum.",
        },
        {
          image: "img/03.jpg",
          title: "Gran Bretagna",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "img/04.jpg",
          title: "Germania",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
        },
        {
          image: "img/05.jpg",
          title: "Paradise",
          text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
        },
      ],

      currentSlider: 0,
      hover: false,
    };
  },

  methods: {
    showNext: function () {
      if (this.currentSlider < this.slides.length - 1) {
        this.currentSlider++;
      } else {
        this.currentSlider = 0;
      }
    },
    showPrev: function () {
      if (this.currentSlider > 0) {
        this.currentSlider--;
      } else {
        this.currentSlider = this.slides.length - 1;
      }
    },
    showThumbImg(clickedImg) {
      this.currentSlider = clickedImg;
    },
    stopAutoPlay: function () {
      if (this.hover === true) {
        console.log(hover);
        clearInterval();
      }
    },
  },
  created: function () {
    setInterval(() => {
      this.showNext();
    }, 3000);
  },
}).mount("#app");
