<template>
  <About msg="Gabriel Dionne"/>
  <Socials/>
</template>

<script>
import Socials from './components/Socials.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About,
    Socials
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

</style>
