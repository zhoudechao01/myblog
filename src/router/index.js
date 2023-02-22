import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login')
  },
  {
    path: '/introduce',
    name: 'PersonBlogHome',
    component: () => import('@/view/introduce')
  },
  {
    path: '/home',
    name: '首页',
    redirect: '/home/introduce',
    component: () => import('@/view/home'),
    children: [
      {
        path: '/home/introduce',
        name: 'PersonBlogIntroduce',
        component: () => import('@/view/introduce')
      },
      {
        path: '/home/recommend',
        name: '文章',
        component: () => import('@/view/article')
      },
      {
        path: '/home/learn',
        name: '学习',
        component: () => import('@/view/learn')
      },
      {
        path: '/home/tattle',
        name: '闲谈',
        component: () => import('@/view/tattle')
      },
      {
        path: '/home/message',
        name: '留言',
        component: () => import('@/view/message')
      },
      {
        path: '/home/detail',
        name: '文章详情',
        component: () => import('@/components/articleDetail')
      },
      {
        path: '/home/picture',
        name: '图片集',
        component: () => import('@/view/picture'),
      },
      {
        path: '/home/picturelist',
        name: '图片列表',
        component: () => import('@/view/picture/pictureList')
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router