<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  margin: 0 auto;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background: transparent;
  cursor: pointer;
}

p {
  margin: 0;
}
</style>
