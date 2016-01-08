<template>
  <div class="container">
    <theheader></theheader>
    <content></content>
  </div>
</template>

<style lang="sass">
  body {
    background: rgb(238,238,238);
    font-family: "Microsoft YaHei"
  }
  .container {
    width: 1080px;
    margin: 0 auto;
    min-height: 600px;
    border: 2px solid red;
  }
</style>

<script>
  import TheHeader from './Header.vue'
  import Content from './content.vue'
  require('./assests/normalize.css');

  export default {
    components:{
      theheader:TheHeader,
      content:Content
    }
  }

</script>
