<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:41:06
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-29 20:49:18
 -->
<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span>{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script type="text/javascript">
  export default {
    props: {
      //指定属性名和属性值的类型
      comment: Object,
      deleteComment: Function,
      index: Number
    },

    methods: {
      deleteItem() {
        //confirm()方法用于显示一个带有指定消息和确认及取消按钮的对话框。
        // 如果访问者点击"确定"，此方法返回true，否则返回false。
        const {
          comment,
          index,
          deleteComment
        } = this
        if (window.confirm('确定删除评论吗？')) {
          deleteComment(index)
        }
      }
    }
  }

</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }

</style>
