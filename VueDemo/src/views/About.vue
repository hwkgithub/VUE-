<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-07 22:10:47
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-08 21:42:03
 -->
<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style>

</style>