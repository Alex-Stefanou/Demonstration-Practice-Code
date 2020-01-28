<template>
  <div id="app">
<!--     
    <div v-if="appState != 'home'">
      <navbar/>
    </div> -->

    <div v-if="appState == 'home'">
      <homepage/>
    </div>

    <div v-if="appState == 'countrySelect'">
      <countrySelect/>
    </div>
    
<!--     
    <div v-if="appState == 'citySelect'">
      <cityselect/>
    </div>
    
    <div v-if="appState == 'coordinates'">
      <coordinates/>
    </div>
    
    <div v-if="appState == 'results'">
      <results/>
    </div> -->

  </div>
</template>

<script>
import countrySelect from './components/countryselect.vue'

export default {
  name: 'app',
  components: {
    countrySelect
  },

  data() {
    return {
      appState: "home",
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
