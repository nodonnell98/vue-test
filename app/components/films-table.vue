<template>
  <div>
    <vue-table
      :tbody-data="films"
      :headers="headers"
      :custom-options="customOptions"
      :style-wrap-vue-table="styleWrapVueTable"
      :disable-cells="disableCells"
      :disable-sort-thead="disableSortThead"
      :loading="loading"
      :parent-scroll-element="parentScrollElement"
      :select-position="selectPosition"
      :submenu-tbody="submenuTbody"
      :submenu-thead="submenuThead"
      v-on:tbody-change-data="dataChanged">

      <div slot='header'>
        <h1>Ghibli Films</h1>
      </div>

      <div slot='loader'>
        <h1>Loading</h1>
      </div>
    </vue-table>
  </div>
</template>
 
<script>
  import VueTable from 'vuejs-spreadsheet';
  import axios from 'axios-on-rails';
  
  export default {
    name: 'app',
    data() {
      return {
        customOptions: {
          tbodyIndex: true,
          sortHeader: true,
          trad: {
            lang: 'en',
            en: {
              select: {
                placeholder: 'Search...',
              },
            },
          },
        },
        submenuTbody: [],
        submenuThead: [],
        disableCells: [],
        loading: false,
        parentScrollElement: {
          attribute: 'html',
          positionTop: 0,
        },
        selectPosition: {
          top: 175,
          left: 0,
        },
        disableSortThead: [],
        styleWrapVueTable: {
          fontSize: '12px',
          comment: {
            borderColor: '#696969',
            borderSize: '8px',
            widthBox: '120px',
            heightBox: '80px',
          },
        },
        headers: this.getHeaders(),
        films: [],
      };
    },
    components: {
      VueTable,
    },
    mounted() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 300);
    },
    created () {
      axios
        .get('/films.json')
        .then(response => (this.films = this.columnifyData(response.data)))
    },
    methods: {
      getHeaders() {
        return [
          {
            headerName: 'ID',
            headerKey: 'id',
            style: {
              width: '100px',
              minWidth: '100px',
              color: '#000',
            },
          },
          {
            headerName: 'Name',
            headerKey: 'name',
            style: {
              width: '600px',
              minWidth: '200px',
              color: '#000',
            },
          },
          {
            headerName: 'Year',
            headerKey: 'year',
            style: {
              width: '200px',
              minWidth: '200px',
              color: '#000',
            },
          },
        ];
      },
      columnifyData(cols) {
        const tableData = []
        cols.forEach(item => {
          const id = {
            type: 'input',
            value: item.id,
            active: false,
            disabled: true
          };

          const name = {
            type: 'input',
            value: item.name,
            active: false
          };

          const year = {
            type: 'select',
            handleSearch: true,
            selectOptions: [],
            value: item.year,
            active: false
          };

          tableData.push({ id, name, year });
        });

        return tableData;
      },
      getSelectOptions() {
        return [
          {
            value: '1990',
            label: '1990',
          },
          {
            value: '1991',
            label: '1991',
          },
          {
            value: '1992',
            label: '1992',
          },
          {
            value: '1993',
            label: '1993',
          },
          {
            value: '1994',
            label: '1994',
          },
          {
            value: '1995',
            label: '1995',
          },
          {
            value: '1996',
            label: '1996',
          },
          {
            value: '1997',
            label: '1997',
          },
          {
            value: '1998',
            label: '1998',
          },
          {
            value: '1999',
            label: '1999',
          },
        ];
      },
      dataChanged(row, header) {
        const film = this.films[row];

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
              .then(response => (this.films = this.columnifyData(response.data)))
          });
      },
    },
  };
</script>

<style lang='scss'>
  ::-moz-selection {
    color: #2c3e50;
    background: transparent;
  }
  ::selection {
    color: #2c3e50;
    background: transparent;
  }
</style>
