<template>
  <div id="app">
   
    <div v-if="appState != 'home' && appState != 'loadingpage'" id="navbar">
      <navbar/>
    </div>

    <div v-if="appState == 'home'">
      <homepage/>
    </div>

    <div v-if="appState == 'selectCountry'">
      <selectCountry/>
    </div>
    
    <div v-if="appState == 'selectCity'">
      <selectCity/>
    </div>

    <div v-if="appState == 'resultCity'">
      <resultCity/>
    </div>

    <div v-if="appState == 'selectCoords'">
      <selectCoords/>
    </div>

    <div v-if="appState == 'loadingpage'">
      <loadingpage/>
    </div>

    <div v-if="appState == 'resultCoords'">
      <resultCoords/>
    </div>

  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import homepage from './components/homepage.vue'
import selectCountry from './components/selectcountry.vue'
import selectCity from './components/selectcity.vue'
import resultCity from './components/resultcity.vue'
import selectCoords from './components/selectcoords.vue'
import loadingpage from './components/loadingpage.vue'
import resultCoords from './components/resultcoords.vue'

export default {
  name: 'app',
  components: {
    navbar,
    homepage,
    selectCountry,
    selectCity,
    resultCity,
    selectCoords,
    loadingpage,
    resultCoords
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
@import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";

canvas {
  background-color: rgba(255, 255, 255, 0.8);
}

html {
  height: 100vh;
  background-image: url("./assets/sky_background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: #314c9b;
}

h1 {
  font-size: 28pt;
}

#navbar {
  margin-top: -1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  background-color: #1f3061;
  color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(36, 36, 36);
  margin-top: 1em;
}

.input {
  width: 40%;
  margin: auto;
  margin-bottom: 0.5em;
}

.table {
  width: 40%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.4);
}

.table td {
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

.table-container {
  width: 100% !important;
  margin-bottom: 0.2em;
}
</style>
