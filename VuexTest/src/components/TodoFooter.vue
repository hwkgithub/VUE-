<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-19 09:35:32
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-19 11:13:44
 -->
<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        v-model="checkAll"
      />
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
    </span>
    <button
      class="btn btn-danger"
      v-show="completeSize"
      @click="deleteAllCompleted"
    >清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    //总数量和统计完成的数量
    ...mapGetters(['totalSize', 'completeSize']),
    
    //判断是否全部选中
    checkAll: {
      // 决定是否勾选 getters里面计算后确定可以勾选
      get() {
        return this.$store.getters.isAllSelect
      },

      //点击全选
      set(value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
        // this.selectAll(value)
        this.$store.dispatch('selectAll', value)
      }
    },
  },

  methods: {
    //清除所有已勾选的
    deleteAllCompleted() {
      if (window.confirm('确定清除已勾选的吗?')) {
        // this.deleteCompleteTodos()
        this.$store.dispatch('deleteCompleteTodos')
      }
}
  }
}
</script>

<style>
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