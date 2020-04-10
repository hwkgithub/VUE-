<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-28 21:41:11
 * @LastEditors: HWK
 * @LastEditTime: 2020-03-29 20:35:00
 -->
<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment"
        :index="index" />
    </ul>
  </div>
</template>

<script type="text/javascript">
  import Item from './item.vue'
  export default {
    //声明接收属性:这个属性就会成为组件对象的属性
    //只指定了属性名
    props: ['comments', 'deleteComment'],

    components: {
      Item
    }
  }

</script>

<style>
  .reply {
    margin-top: 0px;
  }

</style>
