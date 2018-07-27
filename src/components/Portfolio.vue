<template>
  <section style="padding: 0">
    <div class="row" style="height: 10vh; background-color: #08090a; opacity: .8">
      <div class="col-sm-7">
        <h1 style="margin-left: 15px">My Portfolio</h1>
      </div>
    </div>

    <div class="row" style="height: 90vh">
      <app-portfolio-tile v-for="(project, i) in myWork" :key="i" :project="project"></app-portfolio-tile>
    </div>
  </section>
</template>

<script>
import PortfolioTile from './PortfolioTile'
export default {
  data () {
    return {
      myWork: [
        {
          image: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
          title: 'Sample Project',
          type: 'Web Design'
        },
        {
          image: 'https://www.dvusd.org/cms/lib/AZ01901092/Centricity/Domain/4184/3c.jpg',
          title: '',
          type: ''
        }
      ]
    }
  },
  methods: {
    randomImage () {
      let arr = [
        'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
        'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLb5mOUtzV0ObqBVuAURSvPAsC27148aFdKGc6e6Z_Z78vmMWf'
      ]

      let random = Math.floor(Math.random() * arr.length)
      console.log('reached', random)
      return arr[random]
    }
  },
  components: {
    appPortfolioTile: PortfolioTile
  }
}
</script>

<style>
</style>
