<template>
  <div id="app">
    <Header />
    <Landing/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Header,
    Landing
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
