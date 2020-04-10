/*
 * @Description: 
 * @Autor: HWK
 * @Date: 2020-04-07 22:11:58
 * @LastEditors: HWK
 * @LastEditTime: 2020-04-08 21:45:24
 */
/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter({
  // 注册应用中所有的路由
  routes: [{
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [{
          //path的最左侧的/永远代表根路由
          path: '/home/news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [{
            path: '/home/message/detail/:id',
            component: MessageDetail
          }]
        },
        {
          path: '/',
          redirect: 'news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    },


  ]
})
