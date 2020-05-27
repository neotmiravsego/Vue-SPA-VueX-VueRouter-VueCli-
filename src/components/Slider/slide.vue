<template>
  <div class="slide-item">
    <img :src="slide_data.img" alt="" class="img-slide" />
    <div class="wrap-count__like">
      <img src="../../assets/like.png" alt="" class="img-like" />
      <p class="count-like">{{ slide_data.likes }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slide_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
.wrap-count__like {
  padding: 10px 20px 0;
  display: flex;
  align-items: center;
}
.slide-item {
  display: flex;
  flex-direction: column;
}
.img-slide {
  width: 500px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
.img-like {
  margin-right: 5px;
  width: 40px;
  height: 40px;
}
.count-like {
  font-weight: bold;
}
</style>
