<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:54:27
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-07 21:46:07
 -->
<template>
  <mt-button type="primary" @click.native="handleClick" style="width: 100%">Test</mt-button>
</template>

<script type="text/javascript">
  import {
    Toast
  } from 'mint-ui';
  export default {
    methods: {
      handleClick() {
        Toast('提示信息')
      }
    }
  }

</script>

<style>
</style>
