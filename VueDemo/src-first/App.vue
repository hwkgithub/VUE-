<!--
 * @Description: 组件
 * @Autor: HWK
 * @Date: 2020-03-27 20:50:11
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-28 21:34:49
 -->
<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!-- 3.使用组件标签 -->
    <KK />
  </div>
</template>

<script type="text/javascript">
  //1.引入组件
  import KK from './components/HelloWorld'
  export default {
    //2.映射组件标签
    components: {
      KK
    }
  }

</script>

<style>
  .logo {
    width: 200px;
    height: 200px;
  }

</style>
