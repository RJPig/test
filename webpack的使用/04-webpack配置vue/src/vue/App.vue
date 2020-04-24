<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'webpack配置vue测试'
    }
  },
  methods: {
    btnClick() {
      return console.log("btnClick");
      
    }
  }
}
</script>

<style>
  .title {
    color: pink;
  }
</style>