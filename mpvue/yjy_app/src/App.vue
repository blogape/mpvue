<template>
  <div id="app">
        <!-- <loading v-show='showLoading'></loading> -->

   <!-- <keep-alive>  -->

     <router-view/>

     <!-- </keep-alive> -->
  </div>
</template>

<script>
import Loading from "./components/Loading/loading.vue";

export default {

  name: "App",
  data() {
    return {
      showLoading: false
    };
  },
  components: {
    Loading
  },
    activated: function() {
    this.getCase()
  },
};
</script>

<style>
</style>
