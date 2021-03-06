/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:11
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 20:35:25
 */
/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './base.css'

// 创建vm
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {
//     App
//   }, // 映射组件标签
//   template: '<App/>', // 指定需要渲染到页面的模板
//   store // 所有的组件对象都多了一个属性: $store(值就是store对象)
// })


new Vue({
  el: '#app',
  render: h => h(App),
  store
})

// render: function (creatElement) {
//   return creatElement(App)
// }
