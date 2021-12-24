<template>
    <h1>{{ msg }}</h1>
    <p>I am computer science</p>
    <socials></socials>
</template>

<script>

import Socials from './Socials.vue';

export default {
  
  components: {
    Socials
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>