<template>
<div class="them-home">
 <Header :Htitle="titlemsg" :issearch="issearch"></Header>
 <div class="title">

 </div>
</div>
</template>

<script>
import Header from "../Header/header.vue";
export default {
  data() {
    return {
      titlemsg: "主题食谱",
      issearch: true
    };
  },
  components: {
    Header
  }
};
</script>

<style>
</style>
