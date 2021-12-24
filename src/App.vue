<template>
  <About msg="Gabriel Dionne"/>
  <projects :projects="storedProjects"></projects>
</template>

<script>
import About from './components/About.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    About,
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
