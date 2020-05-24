<template>
  <div id="app">
    <Header Heading="Welcome to BOOK-KEEP!!" />
    <Main Body = "Search For Books: "/>
    <Footer message="This is Footer!!"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/body/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
