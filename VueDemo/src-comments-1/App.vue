<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:40:31
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-29 20:38:47
 -->
<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对VUE的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default {
    //数据在哪个组件，更新数据的行为或方法就应该在哪个组件
    data() {
      return {
        comments: [{
            name: 'K1',
            content: '真好看'
          },
          {
            name: 'K2',
            content: '真bu 好看'
          },
          {
            name: 'K3',
            content: '123真好看'
          },
        ]
      }
    },
    methods: {
      //添加评论
      addComment(comment) {
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        this.comments.unshift(comment)
      },

      //删除指定下标的评论
      //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
      //有三个参数 (规定添加/删除的位置,删除的数量,添加新项目) 前两个必须
      deleteComment(index) {
        this.comments.splice(index, 1)
      }
    },
    components: {
      Add,
      List
    }
  }

</script>

<style lang="stylus" scoped>
</style>
