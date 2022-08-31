import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApiTest1 from '@/components/ApiTest1'

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
    }
  ]
})
