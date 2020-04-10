<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-06 18:48:41
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-06 19:48:00
 -->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button>Search</button>
    </div>
  </section>
</template>

<script type="text/javascript">
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        searchName: ''
      }
    },

    methods: {
      search() {
        const searchName = this.searchName.trim()
        if (searchName) {
          //发布搜索的消息
          PubSub.publish('search', searchName)
        }
      }
    }
  }

</script>

<style>
</style>
