<template>
  <div class="column is-one-third-tablet">
    <h1>Search the Solar System!</h1>
    <div class="table-container">

      <input v-model="search" class="input" type="text">

      <table class="table">

        <tbody>
          <tr v-for="(Planet,i) in Display" :key="i">
            <td><img :src="Planet.img" class="image"/></td>
            <td>{{ Planet.name }}</td>
          </tr>
        </tbody>

      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Box7-search',

  data() {
    return{
      search: "",
      Planets: [
        {name: "Mercury"},
        {name: "Venus"},   
        {name: "Earth"},  
        {name: "Mars"},
        {name: "Jupiter"},
        {name: "Saturn"},
        {name: "Uranus"}, 
        {name: "Neptune"},
        {name: "Pluto"}
      ],
      Display: [],
    };
  },

  mounted() { //Load images into variables
    this.Planets[0].img = require("../assets/planets/mercury.png");
    this.Planets[1].img = require("../assets/planets/venus.png");
    this.Planets[2].img = require("../assets/planets/earth.png");
    this.Planets[3].img = require("../assets/planets/mars.png");
    this.Planets[4].img = require("../assets/planets/jupiter.png");
    this.Planets[5].img = require("../assets/planets/saturn.png");
    this.Planets[6].img = require("../assets/planets/uranus.png");
    this.Planets[7].img = require("../assets/planets/neptune.png");
    this.Planets[8].img = require("../assets/planets/pluto.png");

    this.Display = this.Planets;
  },

  watch: {
    search: function() {
      this.updateDisplay();
    }
  },

  methods: {
    updateDisplay() {
      this.Display = []
      let L = this.search.length;
      for ( let i = 0; i < this.Planets.length; i++) {
        if ( this.Planets[i].name.substring(0,L).toLowerCase() == this.search.toLowerCase() ) {
          this.Display.push(this.Planets[i]);
        }
      }
    },
  },

};
</script>

<style scoped>
h1 {
  color: #ffbf00;
  margin-bottom: 0.4em;
}

.column{
  background-image: url("../assets/space_background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-color: #a67c00;
  background-color: black;
}

.image {
  width: 100%;
}

.input {
  width: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  border-color: #ffcf40;
  color: #ffbf00
}

.table {
  width: 80%;
  margin: auto;
  margin-top: 1em;
  line-height: 6;
  font-size: 1.2em;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
</style>
