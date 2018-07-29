<template>
  <section class="container">
    <div class="row">
      <div class="col-md-4">
        <img :src="project.image" alt="" class="img-fluid">
      </div>
      <div class="col-md-8">
        <h1>{{ project.title }}</h1>
        <h5>{{ project.type }}</h5>
      </div>
    </div>
    <hr style="border-color: grey">
    <div class="row">
      <div class="col-12">
        Lorem ipsum dolor sit amet, nec at scripta copiosae menandri, est te amet illud. Te ius vidisse philosophia, cum ei eros facete viderer. Eum id aliquid suscipit partiendo. Ei per enim vivendo dignissim, ex mea prima tation albucius, te partem nonumes philosophia eam.

        Velit soleat electram ex vix, mei id omnium iracundia, duo melius evertitur adolescens eu. Eam commodo saperet consequat eu. Choro tantas dolores no ius, id sed sint facer animal. Erant quaestio volutpat his in. Ea his melius senserit. Nam ut ubique altera possit, eius inimicus id vis. Id cibo saperet inciderint sit.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    project () {
      let id = this.$route.params.id
      return this.$store.getters.getProject(id)
    }
  }
}
</script>

<style>

</style>
