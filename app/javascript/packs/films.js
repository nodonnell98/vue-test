import Vue from 'vue'
import List from '../../components/films-list.vue'
import Table from '../../components/films-table.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmList',
    render: h => h(List),
  });

  new Vue({
    el: '#filmTable',
    render: h => h(Table)
  });
});
