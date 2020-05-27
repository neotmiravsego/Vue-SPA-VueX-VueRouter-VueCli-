<template>
  <div class="container">
    <p class="user-name">
      {{ userInf.name }}
    </p>
    <div class="user-img__wrap">
      <img :src="userInf.avatar" alt="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userInf: {},
    };
  },
  mounted() {
    axios.get("/user.json").then((response) => {
      this.userInf = response.data;
    });
  },
};
</script>
<style lang="scss" scoped>
.container {
    margin-bottom: 100px;
}
.user-name {
    margin-bottom: 20px;
}
</style>
