<template>
  <div class="container">
    <div
      class="slider"
      :style="{ 'margin-left': '-' + 100 * currentSlideI + '%' }"
    >
      <div
        class="wrap-slide__item"
        v-for="item in sliders_data"
        :key="item.__id"
        v-on:dblclick="$emit('onSlideLike', item.id)"
      >
        <slide :slide_data="item" />
      </div>
    </div>
    <div class="wrap-button">
      <button class="button-prev button-slider" v-on:click="prevSlide">
        <img src="../../assets/return.png" alt="" />
      </button>
      <button class="button-next button-slider" v-on:click="nextSlide">
        <img src="../../assets/return.png" alt="" class="next-slide__img" />
      </button>
    </div>
  </div>
</template>
<script>
import slide from "./slide";
export default {
  components: {
    slide,
  },
  props: {
    sliders_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideI: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideI > 0) {
        this.currentSlideI--;
      }
    },
    nextSlide() {
      if (this.currentSlideI >= this.sliders_data.length - 1) {
        this.currentSlideI = 0;
      } else {
        this.currentSlideI++;
      }
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
.slider {
  display: flex;
  transition: all ease 0.5s;
  position: relative;
}

.wrap-button {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.button-slider {
  border: none;
  &:focus {
    outline: none;
  }
}
.next-slide__img {
  transform: rotate(180deg);
}
</style>
