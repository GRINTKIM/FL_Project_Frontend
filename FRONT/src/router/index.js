import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApiTest1 from '@/components/ApiTest1'
import userInfo from '@/components/userInfo'
import Tutorial from '@/components/Tutorial'
import JoinTest from '@/components/JoinTest'
import Visual from '@/components/Visual'
import PythonImg from '@/components/PythonImg'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ApiTest1',
      name: 'ApiTest1',
      component: ApiTest1
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/Tutorial',
      name: 'Tutorial',
      component: Tutorial
    },
    {
      path: '/JoinTest',
      name: 'JoinTest',
      component: JoinTest
    },
    {
      path: '/Visual',
      name: 'Visual',
      component: Visual
    },
    {
      path: '/PythonImg',
      name: 'PythonImg',
      component: PythonImg
    },
    {
      path: '/Board',
      name: 'Board',
      component: Board
    }
  ]
})
