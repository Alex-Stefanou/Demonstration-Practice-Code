<template>
  <div id="app">
<!--     
    <div v-if="appState != 'home'">
      <header/>
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
    -->
    <div v-if="appState == 'coordinates'">
      <coordinates/>
    </div>
<!--
    <div v-if="appState == 'results'">
      <results/>
    </div> -->

  </div>
</template>

<script>
import homepage from './components/homepage.vue'
import countrySelect from './components/countryselect.vue'
import coordinates from './components/coordinates.vue'

export default {
  name: 'app',
  components: {
    homepage,
    countrySelect,
    coordinates,
  },

  data () {
    return {}
  },

  computed: {
    appState: function() {
      return this.$store.getters.appState;
    },
  },
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
