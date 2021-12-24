<template>
  <About msg="Gabriel Dionne"/>
  <Socials/>
  <projects :projects="storedProjects"></projects>
</template>

<script>
import Socials from './components/Socials.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    About,
    Socials,
    Projects
  },
  data() {
    return {
      storedProjects: [
        {
          id: 'project1',
          title: 'testproject1',
          description: 'first project'
        },
        {
          id: 'project2',
          title: 'testproject2',
          description: 'second project'
        }
      ]
    }
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
