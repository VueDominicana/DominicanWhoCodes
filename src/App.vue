<template>
  <div id="app">
    <HeaderItem />
    <router-view />
    <FooterItem v-show="$route.path==='/nominate' ? false : true" />
  </div>
</template>

<script>
import HeaderItem from "@/components/HeaderItem";
import FooterItem from "@/components/FooterItem";

export default {
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
