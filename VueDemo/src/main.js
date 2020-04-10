/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:40:24
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-07 22:19:16
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'


//配置对象的属性名都是一些确定的名字，不能随便修改
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
