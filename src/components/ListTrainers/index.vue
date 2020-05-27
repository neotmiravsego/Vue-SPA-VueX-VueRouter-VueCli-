<template>
  <div class="container">
    <p class="title">Наши ТОП тренера</p>
    <ul class="list-trainers">
      <Trainer
        v-for="item in trainers_data"
        :key="item.__id"
        :trainers_data="item"
      />
    </ul>
  </div>
</template>
<script>
import Trainer from "./trainer";
export default {
  props: {
    trainers_data: {
      type: Array,
      default: () => [],
    },
  },
  name: "TrainersList",
  components: {
    Trainer,
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 25px;
  font-size: 40px;
}
.container {
  margin-bottom: 46px;
}
.list-trainers {
  margin-bottom: 46px;
  padding: 0 100px;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
