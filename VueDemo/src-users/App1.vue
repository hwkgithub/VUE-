<!--
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-03-29 20:54:27
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-06 18:43:23
 -->
<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script type="text/javascript">
 import axios from 'axios'
  export default {
    data() {
      return {
        repoUrl: '',
        repoName: '',
      }
    },

    mounted() {
      //使用vue-resource发ajax请求获取数据
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
      // this.$http.get(url).then((response) => {
      //   //成功了
      //   const result = reponse.data
      //   //得到最受欢迎的repo
      //   const mostRepo = result.item[0]
      //   this.repoUrl = mostRepo.html_url
      //   this.repoName = mostRepo.name
      // }, (response) => {
      //   //失败了
      //   alert('请求失败！')
      // })

      //使用axios发送ajax请求
      axios.get(url).then(response => {
        //成功了
        const result = reponse.data
        //得到最受欢迎的repo
        const mostRepo = result.item[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => {
        //失败了
        alert('请求失败！')
      })
    },

    components: {

    }
  }

</script>

<style>
</style>
