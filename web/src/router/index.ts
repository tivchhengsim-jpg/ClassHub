
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
// the homescreen (student)
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
// all class view 
    {
      path: '/classes',
      name: 'classes',
      component: () => import('@/views/ClassesView.vue'),
    },
// class detail screen 
    {
      path: '/classes/:id',
      name: 'class-detail',
      component: () => import('@/views/ClassDetailView.vue'),
      props: true,
    },
// screen daskbord for teacher
    {
      path: '/teacher/dashboard',
      name: 'teacher-dashboard',
      component: () => import('@/views/TeacherDashboardView.vue'),
    },

    // screen create new class for teacher
    {
      path: '/teacher/classes/new',
      name: 'create-class',
      component: () => import('@/views/CreateClassView.vue'),
    },
  ],
})

export default router
