<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:55:56
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-01 21:30:07
 -->
<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>

<script type="text/javascript">
  import TodoItem from './TodoItem.vue'
  export default {
    props: {
      todos: Array,
    },
    components: {
      TodoItem
    }
  }

</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
