<template>
  <router-view></router-view>
  <!-- <section style="padding: 0">
    <div class="row" style="height: 10vh; background-color: #08090a; opacity: .8">
      <div class="col-sm-7">
        <h1 style="margin-left: 15px">My Portfolio</h1>
      </div>
    </div>

    <div class="row" style="height: 90vh">
      <app-portfolio-tile v-for="(project, i) in projects" :key="i" :project="project"></app-portfolio-tile>
    </div>
  </section> -->
</template>

<script>
import PortfolioTile from './PortfolioTile'
export default {
  data () {
    return {

    }
  },
  computed: {
    projects () {
      return this.$store.getters.projects
    }
  },
  methods: {

  },
  components: {
    appPortfolioTile: PortfolioTile
  },
  created () {
    this.$store.dispatch('initProjects')
  }
}
</script>

<style>
</style>
