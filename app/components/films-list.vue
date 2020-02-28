<template>
  <ul id="films" v-if="films">
    <li v-for="film in films" :key="film.id">
      {{ film.name }} - {{ film.year }}
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        films: null
      }
    },
    created () {
      axios
        .get('/films.json')
        .then(response => (this.films = response.data))
    }
  }
</script>

<style scoped>
  ul { padding-left: 0; }

  li {
    list-style: none;
    text-align: center;
  }
</style>
