<template>
  <div class="container">
    <p class="news-title">Новости о Лидерах</p>
    <ul class="list-news">
      <oneNews v-for="item in news_data" :key="item.__id" :news_data="item" />
    </ul>
  </div>
</template>
<script>
import oneNews from "./oneNews";
export default {
  components: {
    oneNews,
  },
  props: {
    news_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
}
.list-news {
  display: flex;
  flex-wrap: wrap;
}
.news-title {
  margin: 20px 0;
  font-size: 40px;
}
</style>
