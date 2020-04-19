<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 09:41:46
 -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>