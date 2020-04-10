/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:40:24
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-06 17:55:49
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

//声明使用插件
//内部会给vm对象和组件对象添加一个属性：$http 他有两个方法
//一个是get 一个是post
Vue.use(VueResource)


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
