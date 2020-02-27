<template>
  <div class='navigation-bar'>
    <a class='navigation-item' href='/'>
      {{ home_text }}
    </a>
    <a class='navigation-item' href='spreadsheet'>
      {{ spreadsheet_text }}
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        home_text: "Home",
        spreadsheet_text: "Spreadsheet"
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
