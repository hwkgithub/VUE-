/*
 * @Descripttion: 
 * @version: 
 * @Author: HWK
 * @Date: 2020-03-17 12:44:06
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-19 20:54:57
 */
(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = 'my-directive----' + binding.value
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  //向外暴露
  window.MyPlugin = MyPlugin
})(window)