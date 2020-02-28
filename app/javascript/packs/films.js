import Vue from 'vue'
import App from '../../components/films-table.vue'

document.addEventListener('DOMContentLoaded', () => {
  // We are going to create a constant 
  // from on our mounting element in edit.html.erb
  const element = document.getElementById("filmData")

  // Next we want to grab and parse the json from 
  // the mounting element's data attribute
  // const data = JSON.parse(element.getAttribute('data'))
  const data = { films: 1 }

  // Here we are creating conditional that won't build the instance
  // UNLESS the element is present, and films is present
  if (element != null && data != null) {
    const v = new Vue({
      el: '#filmData',
      data: data,
      // except we are passing the films like so in the render
      render: h => h(App),
    });
  }
});
