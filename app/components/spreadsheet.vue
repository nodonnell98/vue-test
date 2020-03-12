<template>
  <div>
    <vue-table
      :tbody-data="products"
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
      v-on:thead-td-sort="sortProduct"
      @tbody-change-data="changeData">

      <div id='app' slot='header'>
        <h1>Ghibli Movies</h1>
      </div>

      <div slot='loader'>
        <h1>Loading</h1>
      </div>
    </vue-table>
  </div>
</template>
 
<script>
import VueTable from 'vuejs-spreadsheet';
 
export default {
  name: 'app',
  data() {
    return {
      customOptions: {
        tbodyIndex: true,
        sortHeader: true,
        trad: {
          lang: 'fr',
          en: {
            select: {
              placeholder: 'Search by typing',
            },
          },
          fr: {
            select: {
              placeholder: 'Taper pour chercher',
            },
          },
        },
        newData: {
          type: 'input',
          value: '',
          active: false,
          style: {
            color: '#000',
          },
        },
        fuseOptions: {
          shouldSort: true,
          threshold: 0.2,
          location: 0,
          distance: 30,
          maxPatternLength: 64,
          minMatchCharLength: 1,
          findAllMatches: false,
          tokenize: false,
          keys: [
            'value',
          ],
        },
      },
      submenuTbody: [
      ],
      submenuThead: [
      ],
      disableCells: ['a'],
      loading: false,
      parentScrollElement: {
        attribute: 'html',
        positionTop: 0,
      },
      selectPosition: {
        top: 175,
        left: 0,
      },
      disableSortThead: ['a'],
      styleWrapVueTable: {
        fontSize: '12px',
        comment: {
          borderColor: '#696969',
          borderSize: '8px',
          widthBox: '120px',
          heightBox: '80px',
        },
      },
      headers: [
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
      ],
      products: [
        {
          name: {
            type: 'input',
            value: 'Spirited Away',
            active: false,
          },
          year: {
            type: 'select',
            handleSearch: true,
            selectOptions: [
              {
                value: '2001',
                label: '2001',
              },
              {
                value: '1988',
                label: '1988',
              },
            ],
            value: '2001',
            active: false,
          },
        },
        {
          name: {
            type: 'input',
            value: 'My Neighbour Totoro',
            active: false,
          },
          year: {
            type: 'select',
            handleSearch: true,
            selectOptions: [
              {
                value: '2001',
                label: '2001',
              },
              {
                value: '1988',
                label: '1988',
              },
            ],
            value: '1988',
            active: false,
          },
        },
      ],
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
  methods: {
    sortProduct(event, header, colIndex) {
    },
    changeData(row, header) {
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
