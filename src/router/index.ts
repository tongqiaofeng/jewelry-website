import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Homepage from '../views/homepage.vue'
import Login from '@/login/login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/',
        name:'Homepage',
        component:Homepage,
      },
      {
        path:'/designerdetails',
        name:'Designerdetails',
        component: () => import("@/components/designerdetails.vue"),
      },  
      {
        path:'/list',
        name:'list',
        component: () => import("@/components/list.vue"),
        meta: {
          keepAlive: true, 
        }
      },  
      {
        path: '/item',
        name: 'item',
        component: () => import("@/components/item.vue"),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import("@/components/contact-us.vue")
      },{
        path:'/my',
        name:'my',
        component:()=>import("@/components/my.vue"),
        meta: {
          keepAlive: true, 
        }
      },{
        path:'loading',
        name:'loading',
        component:()=>import("@/login/loding.vue"),

      }
    ]
  },{
    path:'/login',
    name:'Login',
    component:Login
  },  

 
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,


})

export default router
