<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 10:16:47
 -->
<template>
  <ul class="todo-main">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem.vue'
import storageUtils from '../utils/storageUtils'

export default {
  //因为list需要todos需要在vuex里面读 这个时候要用到computed
  computed: {
    ...mapState(['todos'])
  },

  watch: {
    todos: {
      deep: true, // 深度监视
      handler: storageUtils.saveTodos,
    }
  },

  components: {
    TodoItem
  }
}
</script>

<style>
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