/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:40:24
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-07 21:44:23
 */
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

//注册成标签（全局）
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
