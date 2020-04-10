<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-07 22:10:47
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-09 22:10:04
 -->
<template>
  <ul>
    <li>id: {{messageDetail.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },

    // 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
    //使用异步请求后台数据然后确保后台数据的Id和路由器的id一致后输出
    mounted() {
      setTimeout(() => {
        const allMessageDetails = [{
            id: 1,
            title: 'Message001',
            content: 'message content00111....'
          },
          {
            id: 3,
            title: 'Message003',
            content: 'message content00222....'
          },
          {
            id: 5,
            title: 'Message005',
            content: 'message content00333....'
          }
        ]
        this.allMessageDetails = allMessageDetails
        const id = this.$route.params.id * 1
        this.messageDetail = allMessageDetails.find(detail => detail.id === id * 1)
      }, 10)

    },
    //一旦组件对象（不同的链接时）,重新调用上面mounted的方法
    watch: {
      $route: function () { // 改变当前路由组件参数数据时自动调用
        console.log('$route()')
        const id = this.$route.params.id
        this.messageDetail = this.allMessageDetails.find(detail => detail.id === id * 1)
      }
    }
  }

</script>

<style>

</style>
