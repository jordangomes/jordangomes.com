<template>
  <main class="home">
      <header>
        <img class="logo" src="/Logo512x512.png" alt="JG Logo">
        <h1>Jordan Gomes</h1>
      </header>
      <NavMenu />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style>
  main.home {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
  }
  img.logo {
    max-width: 200px;
  }
  h1 {
    font-family: 'Open Sans';
    font-weight: 300;
    margin-bottom: 10px;
    color: #fff;
  }
</style>
