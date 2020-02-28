<template>
  <div id="app">
    <ul id="films" v-if="films.data.films">
      <li v-for="film in films.data.films" :key="film.id">
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
        .then(response => (this.films = response))
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
