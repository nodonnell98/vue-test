import Vue from 'vue'
import List from '../../components/films-list.vue'
import Spreadsheet from '../../components/films-table.vue'
import Table from '../../components/bootstrap-table.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmList',
    render: h => h(List),
  });

  new Vue({
    el: '#filmSpreadsheet',
    render: h => h(Spreadsheet)
  });

  new Vue({
    el: '#filmTable',
    render: h => h(Table)
  });
});
