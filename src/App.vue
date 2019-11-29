<template>
  <div id="app">
    <Header/>
    <SubHeading v-if="!isNominate"/>
    <router-view/>
    <Footer v-if="!isNominate"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SubHeading from '@/components/SubHeading'
import Footer from '@/components/Footer'

export default {
    components: {
        Header,
        SubHeading,
        Footer
    },
    computed: {
        isNominate() { 
            return this.$route.name === 'nominate' ? true : false;
        }
    }
}
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
