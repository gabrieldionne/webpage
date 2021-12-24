<template>
    <ul>
    <project-item 
      v-for="proj in projects" 
      :key="proj.id" 
      :title="proj.title" 
      :description="proj.description">
    </project-item>
  </ul>
</template>

<script>
    import ProjectItem from './ItemProject.vue';

    export default{
        props: ['projects'],

        components: {
            ProjectItem
        } 
    }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>