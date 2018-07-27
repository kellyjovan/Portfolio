<template>
  <div id="app">
    <app-nav></app-nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    appNav: Nav
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Ubuntu', sans-serif;
  color: white;
}

body {
  background-color: #252627;
}

main {
  position: fixed;
  top: 0;
  left: 60px;
  right: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (max-width: 767px) {
  main {
    left: 0px;
  }
}

.title {
  animation: 1s growOut;
  font-size: 2.5em;
  text-indent: 1em;
}

  @media screen and (min-width: 767px) {
    .fancy {
      /* line-height: 0.5; */
      text-align: center;
      animation: 1s growOut ease-in-out;
    }

    .fancy span {
      display: inline-block;
      position: relative;
    }

    .fancy span:before,
    .fancy span:after {
      content: "";
      position: absolute;
      height: 0.55em;
      border-bottom: 1px solid white;
      top: 0;
      width: 10vw;
    }

    .fancy span:before {
      right: 100%;
      margin-right: 15px;
    }

    .fancy span:after {
      left: 100%;
      margin-left: 15px;
    }
  }

section {
  height: 100%;
  width: 100%;
  padding-top: 80px;
  overflow-x: hidden;
  overflow-y: auto;
}

@keyframes growIn {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }

  @keyframes growOut {
    from {
      transform: scale(1.5);
    }

    to {
      transform: scale(1);
    }
  }
</style>
