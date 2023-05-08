<template>
  <PokemonPrincipal/>
</template>

<script>
import PokemonPrincipal from '@/pages/PokemonPrincipal'

export default {
  name: 'App',
  components: {
    PokemonPrincipal
  }
}
</script>

<style>
  html, body {
          background-color: #EEEEEE;
      }

  h1 {
    font-size: 50px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    color: #232931;
  }
</style>
