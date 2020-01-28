<template>
  <div id="app">
   
    <div v-if="appState != 'home'">
      <navbar/>
    </div>

    <div v-if="appState == 'home'">
      <homepage/>
    </div>

    <div v-if="appState == 'selectCountry'">
      <selectCountry/>
    </div>
    
<!--     
    <div v-if="appState == 'selectCity'">
      <selectCity/>
    </div>-->
<!--
    <div v-if="appState == 'resultCity'">
      <resultCity/>
    </div> -->

    <div v-if="appState == 'selectCoords'">
      <selectCoords/>
    </div>
<!--
    <div v-if="appState == 'resultCoordinates'">
      <resultCoordinates/>
    </div> -->

  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import homepage from './components/homepage.vue'
import selectCountry from './components/selectcountry.vue'
import selectCoords from './components/selectcoords.vue'

export default {
  name: 'app',
  components: {
    navbar,
    homepage,
    selectCountry,
    selectCoords,
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
