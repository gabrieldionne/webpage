<template>
    <li>
      <router-link :to="'/webpage/' + title">
        <base-card>
            <header>
                <h3> {{title}} </h3>

            </header>
            <p>
                {{description}}
            </p>
        </base-card>
      </router-link>
    </li>
</template>

<script>
export default {
    props: ['title', 'description']
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  text-align: center;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover,
a:active {
  color: grey;
}
</style>