<template>
  <div class="col-sm-6 col-md-4 col-lg-3 project" @click="viewDetail">
    <div class="image" :style="{backgroundImage: `url(${project.image}`}"></div>
    <span class="overlay">
      <h3>
        {{project.title}}
      </h3>
      <small class="">{{ project.type }}</small>
    </span>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    viewDetail () {
      this.$router.push({name: 'PortfolioDetail', params: {id: this.project.id}})
    }
  }
}
</script>

<style scoped>
  .project {
    height: 30vh;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
  }

  .project:hover .overlay {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    padding: 2em;
    background-color: rgba(37, 38, 39, .6);
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -webkit-transition: all 1s ease;
  }

  .image {
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 100%;
    background-position: center;
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -webkit-transition: all 1s ease;

  }

  .project:hover .image{
    transform: scale(1.5);
    -moz-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    -o-transform: scale(1.5);
    -ms-transform: scale(1.5);
  }
</style>
