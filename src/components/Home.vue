<template>
    <h1>Gabriel Dionne</h1>
    <p>2nd year UNB Computer Science student.</p>
    <socials></socials>
    <h2>Projects</h2>
    <projects :projects="storedProjects"></projects>
</template>

<script>
    import Socials from './Socials.vue';
    import Projects from './Projects.vue';

export default {
    components: {
        Socials,
        Projects
    },
    data() {
    return {
      storedProjects: [
        {
          id: 'p1',
          title: 'Instaclone',
          description: 'A clone of Instagram made with the MEVN stack from scratch.'
        },
        {
          id: 'p2',
          title: 'GPA Calculator',
          description: 'A simple GPA calculator GUI made in JavaFX.'
        }
      ]
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icons{
  width: 30px;
  padding: 10px;
}
</style>