<template>
  <!-- <a href="#0" class="button">Learn More</a> -->
  <section>
    <div class="overlay">
      <div class="content container">
        <h4 class="subtitle">Hey there, I'm</h4>
        <h1 class="fancy"><span>Jovan Kelly</span></h1>
        <h5 class="subtitle">A future full-stack developer</h5>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    background: url('../assets/1920x1080.jpg') center;
    background-size: cover;
    height: 100%;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.45);
    z-index: 50;
  }

  .content {
    padding-top: 30vh;
    padding-right: 4vw;
    text-align: center;
    color: white;
  }

  h1 {
    font-size: 4.25em;
  }

  .subtitle {
    opacity: .8;
    font-style: oblique;
    animation: 2s growOut;
  }

</style>
