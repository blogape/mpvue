<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {}
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:9999;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,1);
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
    margin:15rem auto;
    width: 15rem;
  }
</style>
