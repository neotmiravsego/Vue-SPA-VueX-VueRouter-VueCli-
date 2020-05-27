<template>
  <div class="container">
    <Slider :sliders_data="slides" @onSlideLike="likePhoto" />
    <News :news_data="jsonNews" />
    <Trainers :trainers_data="jsonTrainers"/>
  </div>
</template>
<script>
import Slider from "../components/Slider";
import News from "../components/News";
import Trainers from "../components/ListTrainers";
import axios from "axios";
export default {
  components: {
    Slider,
    News,
    Trainers,
  },
  data() {
    return {
      slides: [],
      jsonNews: [],
      jsonTrainers:[]
    };
  },
  mounted() {
    axios.get("/slides.json").then((response) => {
      this.slides = response.data;
    });
    axios.get("/news.json").then((response) => {
      this.jsonNews = response.data;
    });
    axios.get("/trainers.json").then((response) => {
      this.jsonTrainers = response.data.filter(trainer => trainer.raiting >= 10);
    });
  },
  methods: {
    likePhoto(id) {
      this.slides = this.slides.map((slide) => {
        if (slide.id === id) {
          slide.likes += 1;
        }
        return slide;
      });
    },
  },
};
</script>
