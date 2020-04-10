<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:54:27
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-06 20:28:10
 -->
<template>
  <div class="container">
    <Search />
    <UsersMain />
  </div>
</template>

<script type="text/javascript">
  import Search from './components/Search.vue'
  import UsersMain from './components/Main.vue'

  export default {
    components: {
      Search,
      UsersMain
    }
  }

</script>

<style>
</style>
