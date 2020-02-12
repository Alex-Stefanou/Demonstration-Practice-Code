<template>
  <div id="app">
    <h1>Alex's Elixier Emporium Inventory</h1>

    <button @click="open" type="button" class="button">Add/Remove Stock</button>
    <modal/>

    <Inventory/>
  </div>
</template>

<script>
import Inventory from './components/Inventory.vue'
import modal from './components/modal.vue'


export default {
  name: 'App',
  components: {
    Inventory,
    modal,
  },
  mounted: function() {
    this.$store.dispatch("updateInventory");
  },

  methods: {
      open: function() {
        console.log("Requesting store to open modal");
        this.$store.commit("setModal", true);
      },
    },
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
