<template>
  <div class="column is-one-third-tablet">
    <h1>Search the Solar System!</h1>
    <div class="table-container">
      <table class="table">

        <thead>
          <th></th>
          <th><input v-model="search" type="text"></th>
        </thead>

        <tbody>
          <tr v-for="(Planet,i) in Display" :key="i">
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
    this.Planets[0].img = new Image(require("../assets/planets/mercury.png"));
    this.Planets[1].img = new Image(require("../assets/planets/venus.png"));
    this.Planets[2].img = new Image(require("../assets/planets/earth.png"));
    this.Planets[3].img = new Image(require("../assets/planets/mars.png"));
    this.Planets[4].img = new Image(require("../assets/planets/jupiter.png"));
    this.Planets[5].img = new Image(require("../assets/planets/saturn.png"));
    this.Planets[6].img = new Image(require("../assets/planets/uranus.png"));
    this.Planets[7].img = new Image(require("../assets/planets/neptune.png"));
    this.Planets[8].img = new Image(require("../assets/planets/pluto.png"));

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>
