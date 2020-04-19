/*
 * @Description: 包含n个基于state的getter计算属性方法的对象模块
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 10:53:59
 */

export default {

  // 总数量
  totalSize(state) {
    return state.todos.length
  },

  // 完成的数量
  completeSize(state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },

  //判断是否勾选
  //当你一个都没有的时候 他会默认为true就会勾选，所以后面要加上总数量要大于零
  isAllSelect(state, getters) {
    return getters.completeSize === getters.totalSize && getters.completeSize > 0
  }
}
