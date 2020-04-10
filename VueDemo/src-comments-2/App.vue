<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:54:27
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-01 22:37:58
 -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给TodoHeader标签对象绑定自定义事件监听 -->
      <!-- 方法一 -->
      <TodoHeader @addTodo="addTodo" />
      <!-- 方法二 -->
      <!-- <TodoHeader ref="header" /> -->
      <TodoList :todos="todos" />
      <!-- <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos" /> -->
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll" />
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>
<!--
绑定事件监听-----订阅消息
触发事件-----发布消息
-->
<script type="text/javascript">
  //订阅消息
  import PubSub from 'pubsub-js'

  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './util/storageUtil'
  export default {
    data() {
      return {
        //从localStorage读取todos 这里getItem得到的是字符串
        //使用JSON.parse()方法，把JSON字符串转换成为JSON对象
        //而后面的因为可能todos_key没有值，所以把数组字符串解析成空的数组
        //格式：getItem(keyName)
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },

    computed: {
      completeSize() {
        //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
        //这里的写法是把两个函数整合在一起不用写两个函数  格式：（函数,初始数量）
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },

      isAllCheck: {
        //确定当前是true(全选)还是false(不全选)
        get() {
          return this.completeSize == this.todos.length && this.cocompleteSize > 0
        },
        //value是当前checkbox最新的值 是布尔类型 当点击之后 value值为true
        //再把true传入selectAllTodos方法中 这样check的值是true 
        set(value) {
          this.selectAllTodos(value)
        }
      }
    },

    //执行异步代码  第二种绑定事件监听方法要用到
    // mounted() {
    //   //给<TodoHeader/>绑定addTodo事件监听
    //   this.$refs.header.$on('addTodo', this.addTodo)
    // },

    mounted() {
      //订阅消息要在异步代码这里执行
      //msg其实没什么用但是必须写 这里把回调函数改成箭头函数 就可以访问外部的deleteTodo方法
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },

    methods: {
      //Header添加
      addTodo(todo) {
        this.todos.unshift(todo)
      },

      //List 删除
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },

      //footer   
      //删除所有选中的
      deleteCompleteTodos() {
        //过滤筛选complete为false的 前面this.todos是为了把后面filter出来的新数组覆盖掉以前的
        //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选
      selectAllTodos(check) {
        //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
        //这里forEach遍历调用整个数组 再把所有的complete改为check的值
        this.todos.forEach(todo => todo.complete = check)
      }
    },

    //深度监视 监视todos数组发生变化时就保存
    watch: {
      todos: {
        //当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变
        //只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
        deep: true,
        // handler: function (value) {
        //   //把todos最新的值的json数据，保存到localStorage里面
        //   //使用JSON.stringify()这个方法，来将value转换成为JSON字符串
        //   //格式：setItem(keyName, keyValue);
        //   // window.localStorage.setItem('todos_key', JSON.stringify(value))
        //   storageUtil.saveTodos(value)
        // }
        handler: storageUtil.saveTodos
      }
    },

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }

</script>

<style>
  /*app*/
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
