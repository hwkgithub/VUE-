<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-18 10:45:25
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-18 11:01:09
 -->
<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  //计算属性对应store的getters
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   },
  //   evenOrOdd() {
  //     return this.$store.getters.evenOrOdd
  //   }
  // },
  computed: {
    //mapState相当于返回值:{count(){return this.$store.state['count']}}
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },

  //methods对应store的actions和mutations
  //提交的是action的名称

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
  
  // methods: {
  //   //增加
  //   increment() {
  //     this.$store.dispatch('increment')
  //   },

  //   //减少
  //   decrement() {
  //     this.$store.dispatch('decrement')
  //   },

  //   //奇数才增加
  //   incrementIfOdd() {
  //     this.$store.dispatch('incrementIfOdd')
  //   },

  //   //过一秒再增加
  //   incrementAsync() {
  //     this.$store.dispatch('incrementAsync')
  //   }
  // }


  
}
</script>

<style>
</style>