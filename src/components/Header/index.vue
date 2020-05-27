<template>
  <header class="header">
    <div class="wrap-logo">
      <img src="../../assets/logoMaks.png" alt="" class="logo" />
    </div>
    <router-link to="/" class="link-home">Home</router-link>
    <div class="menu-wrap" v-if="!LOGIN_STATE">
      <button class="button-menu" v-on:click="login">Login</button>
      <button class="button-menu">Register</button>
    </div>
    <div class="user-wrap" v-if="LOGIN_STATE">
      <div class="wrap-logout">
        <button v-on:click="logout" class="button-menu">
          Logout
        </button>
      </div>
      <div class="user-wrap__img">
        <img :src="user.avatar" alt="" class="user-img" />
      </div>
      <router-link to="/user/privat/office" class="link-pritave__office"
        >Личный кабинет</router-link
      >
      <p class="user-name">{{ user.name }}</p>
    </div>
  </header>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapGetters(["LOGIN_STATE"]),
  },
  methods: {
    ...mapActions(["setLogin", "setLogout"]),
    login() {
      axios.get("/user.json").then((response) => {
        this.user = response.data;
        if (this.user.isLogin) {
          this.setLogin();
        }
      });
    },
    logout() {
      this.setLogout();
      if (this.$route.path !== "/") {
        console.log(this.$router);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss">
.user-wrap__img {
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  .user-img {
    height: 40px;
    width: 70px;
    object-fit: cover;
    border-radius: 8px;
  }
}
.user-name {
  font-size: 18px;
  color: gray;
}
.link-pritave__office {
  color: gray;
}
.link-home {
  font-size: 20px;
  color: gray;
}
.logo {
  width: 130px;
  height: 115px;
}
.header {
  margin-bottom: 30px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-menu {
  margin: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: gray;
}
</style>
