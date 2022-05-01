<template>
  <div id="App">
    <router-view></router-view>
    <Footer/>
  </div>
  
</template>

<script>
import Footer from "@/components/Footer";
import Footinfo from "@/components/Footinfo";

export default {
  name:"App",
  data () {
    return {
      
    }
  },
  components: {
    Footer,
    Footinfo,
  }
}
</script>

<style lang="less">

</style>
