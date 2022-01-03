<template>
    <h1>Gabriel Dionne</h1>
    <p>I am computer science</p>
    <socials></socials>
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
          title: 'project1',
          description: 'first project'
        },
        {
          id: 'p2',
          title: 'project2',
          description: 'second project'
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