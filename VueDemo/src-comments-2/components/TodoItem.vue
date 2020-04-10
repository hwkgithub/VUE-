<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:55:56
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-08 22:26:06
 -->
<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style={backgroundColor:bgColor}>
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script type="text/javascript">
  import PubSub from 'pubsub-js'
  export default {
    props: {
      todo: Object,
      index: Number,
    },

    data() {
      return {
        bgColor: 'white', //默认的背景颜色
        isShow: false //默认按钮是否显示
      }
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = '#aaaaaa'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },

      deleteItem() {
        const {
          todo,
          index,
          deleteTodo
        } = this
        if (window.confirm('确认删除吗？')) {
          //deleteTodo(index)
          //发布消息
          PubSub.publish('deleteTodo', index)
        }
      }
    }
  }

</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
