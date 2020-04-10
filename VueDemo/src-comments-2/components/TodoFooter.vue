<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:55:56
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-01 22:13:32
 -->
<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isAllCheck" /> -->
      <slot name="checkAll"></slot>
    </label>
    <span>
      <!-- <span>已完成{{completeSize}}</span> / 全部{{todos.length}} -->
      <slot name="count"></slot>
    </span>
    <!-- <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button> -->
    <slot name="delete"></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      // todos: Array,
      // deleteCompleteTodos: Function,
      // selectAllTodos: Function,
    },

    // computed: {
    //   completeSize() {
    //     //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    //     //这里的写法是把两个函数整合在一起不用写两个函数  格式：（函数,初始数量）
    //     return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    //   },

    //   isAllCheck: {
    //     //确定当前是true(全选)还是false(不全选)
    //     get() {
    //       return this.completeSize == this.todos.length && this.cocompleteSize > 0
    //     },
    //     //value是当前checkbox最新的值 是布尔类型 当点击之后 value值为true
    //     //再把true传入selectAllTodos方法中 这样check的值是true 
    //     set(value) {
    //       this.selectAllTodos(value)
    //     }
    //   }
    // }
  }

</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
