import { createRouter, createWebHashHistory } from 'vue-router'

// router

// ***********************************router start********************************************************
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      // component: () => import('@/layout/AppLayout.vue'),
      meta: {
        title: '首頁',
        hide: false
      },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            auth: true,
            hide: false,
            icon: 'pi pi-fw pi-home',
            theme: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/:404(.*)*',
      name: '404',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '找不到頁面',
        auth: false,
        hide: true
      }
    },
    {
      path: '/:403(.*)*',
      name: '403',
      component: () => import('@/views/NotRole.vue'),
      meta: {
        title: '權限不足',
        auth: false,
        hide: true
      }
    }
  ]
})
// ***********************************router end********************************************************

// https://book.vue.tw/CH4/4-4-navigation-guards.html
// 路由守衛
router.beforeEach((to) => {
  document.title = `${to.meta.title} - 網站名稱`
})

export default router
