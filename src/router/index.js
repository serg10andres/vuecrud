import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

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
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUpView
    },
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
