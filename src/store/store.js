import Vue from 'vue'
import Vuex from 'vuex'

import projects from '../data/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    'SET_PROJECTS' (state, projects) {
      state.projects = projects.slice()
      if (projects.length < 12) {
        const comingSoon = {
          image: 'https://www.dvusd.org/cms/lib/AZ01901092/Centricity/Domain/4184/3c.jpg',
          title: '',
          type: ''
        }
        state.projects.push(comingSoon)
      }
    }
  },
  actions: {
    initProjects: ({commit}) => {
      commit('SET_PROJECTS', projects)
    }
  },
  getters: {
    projects: state => {
      return state.projects
    },
    getProject: state => index => {
      return state.projects.find(item => {
        return item.id === parseInt(index)
      })
    }
  }
})
