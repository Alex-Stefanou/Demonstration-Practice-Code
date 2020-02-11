<template>
  <div id="app">
    <h1>Alex's Elixier Emporium Inventory</h1>
    <Inventory/>
  </div>
</template>

<script>
import Inventory from './components/Inventory.vue'

export default {
  name: 'App',
  components: {
    Inventory,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
