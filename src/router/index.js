import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LoginView from '../views/Login.vue'
import Layout from '../views/Layout.vue'

//Students
import StudentView from '../views/Students/View.vue'
import StudentCreate from '../views/Students/Create.vue'
import StudentEdit from '../views/Students/Edit.vue'
//Users
import UserView from '../views/Users/View.vue'
import UserCreate from '../views/Users/Create.vue'
import UserEdit from '../views/Users/Edit.vue'
//Posts
import PostView from '../views/Posts/View.vue'
import PostCreate from '../views/Posts/Create.vue'
import PostEdit from '../views/Posts/Edit.vue'
//User
import ProfileView from '../views/Profile/View.vue'

const isUserLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token ? true : false
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/students',
    //   name: 'students',
    //   component: StudentView
    // },
    // {
    //   path: '/students/create',
    //   name: 'studentCreate',
    //   component: StudentCreate
    // },
    // {
    //   path: '/students/:id/edit',
    //   name: 'studentEdit',
    //   component: StudentEdit
    // },
    {
      path: '/users',
      name: 'users',
      component: UserView,
      meta: {needsAuth: true}
    },
    {
      path: '/users/create',
      name: 'userCreate',
      component: UserCreate,
      meta: {needsAuth: true}
    },
    {
      path: '/users/:id/edit',
      name: 'userEdit',
      component: UserEdit,
      meta: {needsAuth: true}
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView,
      meta: {needsAuth: true}
    },
    {
      path: '/posts/create',
      name: 'postCreate',
      component: PostCreate,
      meta: {needsAuth: true}
    },
    {
      path: '/posts/:id/edit',
      name: 'postEdit',
      component: PostEdit,
      meta: {needsAuth: true}
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {needsAuth: true}
    },
  ]
})

router.beforeEach((to, from, next) => {
    if(to.meta.needsAuth){
      isUserLoggedIn() == true ? next() : next('/');
    }
    else{
      next();
    }
})

export default router
