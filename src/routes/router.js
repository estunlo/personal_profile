import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode   : 'history',
  base   : process.env.BASE_URL,
  routes : [
    {
      path      : '/',
      name      : 'AboutMe',
      component : () => import('../views/AboutMe')
    },
    {
      path      : '/resume',
      name      : 'Resume',
      component : () => import('../views/resume/Resume')
    },
    {
      path      : '/resume/pdf',
      name      : 'PDF',
      component : () => import('../views/resume/Resume_PDF')
    },
    {
      path      : '/admin',
      name      : 'Admin',
      component : () => import('../views/Admin')
    }
  ]
})
