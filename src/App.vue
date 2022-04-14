<template>
  <div id="app">
     <div class="header"></div>
     <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/layout/index.vue'
export default {
  name: 'App',
  components:{
    Layout
  },
  created(){
    // this.$router.push('/') 
  }
}
</script>

<style>
.header {
  width: 100%;
  height: 30px;
  background-color: #bfc;
}
</style>
