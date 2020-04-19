/*
 * @Description: 包含多个由action触发用于直接更新状态的方法的对象模块
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 11:07:48
 */
/*

 */
import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL_TODOS,
  DELETE_COMPLETE_TODOS
} from './mutation-types'

export default {
  //对应header里面的add方法
  //因为mutations里面是小写的所以如果直接写会不匹配
  //要把从字符串变成一个变量，加一个中括号
  [ADD_TODO](state, {
    todo
  }) { // 方法名不是ADD_TODO, 而是add_todo
    state.todos.unshift(todo)
  },

  //对应item里面的deleteItem方法
  [DELETE_TODO](state, {
    index
  }) {
    state.todos.splice(index, 1)
  },
 
  //对应footer里面的checkAll里面set的selectAll方法用于更新全选/全不选
  //点击按钮之后才生效，默认是为true
  [SELECT_ALL_TODOS](state, {
    check
  }) {
    state.todos.forEach(todo => todo.complete = check)
  },

  //对应footer里面的deleteCompleteTodos方法
  [DELETE_COMPLETE_TODOS](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}
