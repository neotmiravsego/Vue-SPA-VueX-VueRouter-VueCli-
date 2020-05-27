<template>
  <li class="container">
    <div class="list-news__item">
      <div class="news__item-card">
        <h3 class="title">
          {{ news_data.title }}
        </h3>
      </div>
      <router-link
        :to="`/news/${news_data.__id}`"
        class="link-full__information"
      >
        <p>Прочитать всю информацию о новости</p>
      </router-link>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    news_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 50%;
}
.list-news__item {
  margin: 0 auto 35px;
  height: 150px;
  width: 400px;
  position: relative;

  &:hover {
    .link-full__information {
      opacity: 1;
    }
  }
  &::before {
    content:"NEWS";
    padding-top: 10px;
    letter-spacing: 2px;
    font-size: 28px; 
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
  }
}
.news__item-card {
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-full__information {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0;
  transition: 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  p {
    color: white;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.7px;
  }
}
</style>
