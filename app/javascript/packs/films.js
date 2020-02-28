import Vue from 'vue'
import App from '../../components/films-table.vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#filmData',
    render: h => h(App),
  });
});
