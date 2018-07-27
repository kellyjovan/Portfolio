<template>
  <!-- <a href="#0" class="button">Learn More</a> -->
  <section>
    <div class="overlay">
      <div class="content container">
        <h4 class="subtitle">Hey there, I'm</h4>
        <h1 class="fancy"><span>Jovan Kelly</span></h1>
        <h5 class="subtitle">A future full-stack developer</h5>
      </div>
      <ul class="media-icons flex-column nav">
        <li>
          <a href="https://github.com/kellyjovan" target="_blank"><i class="fab fa-github-alt"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jovan-k-4608629b/" target="_blank"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
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

  .media-icons {
    position: fixed;
    right: 0;
    top: 80vh;
    color: white;
    font-size: 30px;
    margin-right: 15px;
  }

  .media-icons a, .media-icons a:visited {
    color: white;
  }

  .media-icons li:hover i {
    animation: 1s wobble;
    color: #252627;
  }

  @keyframes wobble{
    10%, 60% {
      transform: rotate(10deg)
    }

    20%, 70% {
      transform: rotate(-15deg)
    }

    30%, 80% {
      transform: rotate(20deg)
    }

    40%, 90% {
      transform: rotate(-25deg)
    }

    50%, 100% {
      transform: rotate(30deg)
    }
  }
</style>
