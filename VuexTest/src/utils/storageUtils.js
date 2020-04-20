/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 18:36:52
 */
/*
向local中存储数据的工具模块
1. 向外暴露一个函数(功能)
   只有一个功能需要暴露
2. 向外暴露一个对象(包含多个功能)
   有多个功能需要暴露
 
 JSON.stringify()的作用是将 JavaScript 对象转换为 JSON 字符串
 JSON.parse()可以将JSON字符串转为一个对象。
 JSON.stringify()将对象a变成了字符串c，
 那么我就可以用JSON.parse()将字符串c还原成对象a。
   */


// localStorage.getItem(key):获取指定key本地存储的值
// localStorage.setItem(key,value)：将value存储到key字段
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
