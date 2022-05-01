<template>
  <div>
    <Header/>
    <TypeNav/>
    <Info/>
    <Bookinfo/>
    <Footinfo/>
  </div>
</template>

<script>
import Info from "@/views/Search/Info"
import Bookinfo from "@/views/Search/Bookinfo"

export default {
  name:"Search",
  components: {
    Info,
    Bookinfo
  }
}
</script>

<style>

</style>