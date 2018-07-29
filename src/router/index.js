import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio/Portfolio'
import PortfolioDetail from '@/components/Portfolio/PortfolioDetail'
import PortfolioHome from '@/components/Portfolio/PortfolioHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/bio',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/portfolio',
      component: Portfolio,
      children: [
        {
          path: '',
          name: 'Portfolio',
          component: PortfolioHome
        },
        {
          path: ':id',
          name: 'PortfolioDetail',
          component: PortfolioDetail
        }
      ]
    }
  ]
})
