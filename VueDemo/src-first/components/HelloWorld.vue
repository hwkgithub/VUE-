<!--
 * @Description: 组件实例
 * @Autor: HWK
 * @Date: 2020-03-27 21:03:30
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-27 22:12:18
 -->
<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    // 配置对象
    data() {
      // 本来可以写对象也可以写函数  但是组件里面必须写函数
      return {
        msg: 'Hello HWK'
      }
    }
  }

</script>

<style>
  .msg {
    color: red;
    font-size: 35px;
  }

</style>
