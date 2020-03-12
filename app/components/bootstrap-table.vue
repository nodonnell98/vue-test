<template>
  <div>
    <b-table striped hover
      :items='items'
      :fields='fields'
      >
      <template v-slot:cell(name)='row'>
        <b-form-input v-model='row.item.name' v-on:change.native="dataChanged"/>
      </template>
      <template v-slot:cell(year)='row'>
        <b-form-input v-model='row.item.year' v-on:change.native="dataChanged"/>
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios-on-rails';

  export default {
    data() {
      return {
        fields: [{ ID: 'id', Name: 'name', Year: 'year' }],
        items: []
      };
    },
    created () {
      axios
        .get('/films.json')
        .then(response => (this.items = response.data))
    },
    methods: {
      dataChanged(e) {
        let row = e.target.closest('tr')
        let film = this.items[row.rowIndex - 1]

        axios
          .put('/films/' + film.id,
          {
            film: {
              name: row.children[1].children[0]._value,
              year: row.children[2].children[0]._value
            }
          })
      },
    }
  };
</script>

<style>
  body {
    padding: 1rem;
  }
</style>
