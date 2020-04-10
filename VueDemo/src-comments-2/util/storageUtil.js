/*
 * @Description: 使用LocalStorage存储数据的工具模块
 * @Autor: HWK
 * @Date: 2020-04-01 22:21:10
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-01 22:35:09
 */
// 1.函数 ---- 一个功能
// 2.对象 ---- 多个功能
// 看是要向外暴露一个功能还是多个功能
const TODOS_KEY = 'todos_key'
export default {
  saveTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  readTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
