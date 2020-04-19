/*
 * @Description: 接收组件通知触发mutation调用间接状态的方法的对象
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 11:10:47
 */
/*
包含n个用于间接更新状态的方法的对象模块
 */
import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL_TODOS,
  DELETE_COMPLETE_TODOS
} from './mutation-types'

export default {
  //对面header里面的add方法
  //因为在header里面传了todo所以这边action要接收但是本身不用又要传给mutation
  addTodo({
    commit
  }, todo) {
    // 提交一个comutation请求
    //无论数据什么类型，传的数据都要用对象包起来
    commit(ADD_TODO, {
      todo
    }) // 传递给mutation的是一个包含数据的对象
  },

  //对应item里面的deleteItem方法
  deleteTodo({
    commit
  }, {
    index
  }) {
    commit(DELETE_TODO, {
      index
    })
  },

  //对应footer里面的checkAll里面set的selectAll方法用于更新全选/全不选
  selectAll({
    commit
  }, check) {
    commit(SELECT_ALL_TODOS, {
      check
    })
  },

  //对应footer里面的deleteCompleteTodos方法
  deleteCompleteTodos({
    commit
  }) {
    commit(DELETE_COMPLETE_TODOS)
  }
}
