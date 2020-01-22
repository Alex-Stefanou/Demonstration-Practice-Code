<template>
  <div class="column is-one-third-tablet">
    <h1>The Solar System!</h1>
    <div>
      <template v-if="grid">Grid</template>
      <template v-if="!grid">List</template>
      <input type="checkbox" v-model="grid"/>
    </div>

    <div v-if="grid">
      <div id="grid">
        <div v-for="(Planet,i) in Planets" :key="i">
          <img :src="Planet.img" class="grid-item"/>
        </div>
      </div>
    </div>

    <div v-if="!grid" class="table-container">
      <table class="table">
        <tbody>
          <tr v-for="(Planet,i) in Planets" :key="i">
            <td><img :src="Planet.img"/></td>
            <td>{{ Planet.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Box8-layout',

  data() {
    return{
      grid: true,
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
  },
/* 
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
 */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#grid {
  display: grid;
  grid-template-rows: repeat(3, 10vh);
  grid-row-gap: 1em;
	grid-template-columns: repeat(3, 10vw);
  grid-column-gap: 1em;
}

</style>
