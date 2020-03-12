<template>
  <div class='navigation-bar'>
    <a v-for="link in links" :key="link.id" class='navigation-item' :href=link.path>
      {{link.text}}
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        links: {
          home: {
            path: '/',
            text: 'Home',
            id: 1
          },
          demo_spreadsheet: {
            path: '/spreadsheet',
            text: 'Vue-Spreadsheet Demo',
            id: 2
          },
          films_spreadsheet: {
            path: '/films',
            text: 'Vue-Spreadsheet with Films',
            id: 3
          }
        }
      }
    }
  }
</script>

<style scoped>
  .navigation-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #198dbb;
    padding: 10px 0;
  }

  .navigation-item {
    font-family:Arial, Helvetica, sans-serif;
    color: white;
    line-height: 1.6;
  }
</style>
