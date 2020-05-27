<template>
  <div class="container">
    <h1>{{ singleNews.title }}</h1>
    <div class="news-content__wrap">
      <p class="bried-information">
        {{ singleNews.briefInformation }}
      </p>
      <p class="full-information">
        {{ singleNews.fullInformation }}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      singleNews: {},
    };
  },
  mounted() {
    axios.get("/news.json").then((response) => {
      this.singleNews = response.data.find(
        (news) => news.__id === this.$route.params.id
      );
    });
  },
};
</script>
<style lang="scss">
.news-content__wrap {
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  line-height: 30px;
}
.bried-information {
  margin-bottom: 50px;
  padding: 0px 10px;
}
.full-information {
  padding: 20px 10px;
}
</style>
