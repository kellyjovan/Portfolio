<template>
  <nav>
    <ul class="nav flex-column">
      <router-link tag="li" class="nav-item" active-class="active" :to="{name: 'Home'}" exact><i class="material-icons">home</i></router-link>
      <router-link tag="li" class="nav-item" active-class="active" :to="{name: 'About'}"><i class="material-icons">person</i></router-link>
      <router-link tag="li" class="nav-item" active-class="active" :to="{name: 'Skills'}"><i class="material-icons">build</i></router-link>
      <router-link tag="li" class="nav-item" active-class="active" :to="{name: 'Portfolio'}"><i class="material-icons">code</i></router-link>
      <router-link tag="li" class="nav-item" active-class="active" :to="{name: 'Contact'}"><i class="material-icons">email</i></router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    height: 100%;
    width: 60px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: #08090a;
    opacity: 0.7;
    vertical-align: middle;
    color: white;
    z-index: 999;
  }

  @media (max-width: 767px) {
    nav {
      display: none;
    }
  }

  nav>ul {
    position: fixed;
    top: 25%;
    text-align: center;
    font-size: 30px;
  }

  li {
    margin: 10px 18px;
    animation: 0.5s growOut;
    height: 50px;
    cursor: pointer;
  }

  li:hover {
    color: #252627;
    animation: 1s growIn;
  }

  .active {
    color: #252627;
  }
</style>
