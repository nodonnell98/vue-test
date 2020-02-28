<template>
  <div id="app">
    <ul id="films" v-if="films">
      <li v-for="film in films" :key="film.id">
        {{ film.name }} - {{ film.year }}
      </li>
    </ul>
  </div>
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
  li {
    list-style: none;
  }
</style>
