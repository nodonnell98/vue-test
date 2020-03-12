<template>
  <div>
    <b-table striped hover
      :items="items"
      :fields="fields"
      >
      <template v-slot:cell(name)="row">
        <b-form-input v-model="row.item.name"/>
      </template>
      <template v-slot:cell(year)="row">
        <b-form-input v-model="row.item.year"/>
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios-on-rails';

  export default {
    data() {
      return {
        fields: [{ ID: 'id', Name: "name", Year: "year" }],
        items: []
      };
    },
    created () {
      axios
        .get('/films.json')
        .then(response => (this.items = response.data))
    },
    watch: {
      items: {
        deep: true,
        handler (oldItems, newItems) {
          this.dataChanged(1);
        }
      }
    },
    methods: {
      dataChanged(row, header) {
        console.log('HERE');
        const film = this.items[row];
        console.log(film)

        axios
          .put('/films/' + film.id.value,
          {
            film: {
              id: film.id.value,
              name: film.name.value,
              year: film.year.value
            }
          })
          .then(function(response) {
            axios
              .get('/films.json')
              .then(response => (this.items = response.data))
          });
      },
    }
  };
</script>

<style>
  body {
    padding: 1rem;
  }
</style>
