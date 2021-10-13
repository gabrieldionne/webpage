<template>
  <div class="socials">
    <h1>{{ msg }}</h1>
    <a href="https://ca.linkedin.com/in/gdionne"><img class="icons" id="linkedin_icon" src="../assets/linkedin.svg"></a>
    <a href="https://github.com/gabrieldionne"><img class="icons" id="github_icon" src="../assets/github.svg"></a>
  </div>
</template>

<script>
export default {
  name: 'Socials',
  props: {
    msg: String
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
