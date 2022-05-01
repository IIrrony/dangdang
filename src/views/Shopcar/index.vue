<template>
  <div class="Shopcar">
    <Topheader/>
    <Carhead/>
    <Carinfo/>
    <Carswiper/>
  </div>
</template>

<script>
import Carhead from "@/views/Shopcar/Carhead"
import Carinfo from "@/views/Shopcar/Carinfo"
import Carswiper from "@/views/Shopcar/Carswiper"

export default {
  name:"Shopcar",
  components: {
    Carhead,
    Carinfo,
    Carswiper,
  }
}
</script>

<style lang="less" scoped>

</style>