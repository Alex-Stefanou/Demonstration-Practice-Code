<template>
  <div>

    <div v-if="success == false">
      <h1>No air quality measurements within 1000 km of ({{ coordinate.latitude }} , {{ coordinate.longitude }})</h1>
      <button @click="back" class="button">Go back</button>
    </div>

    <div v-else>
      <h1>Searching for a location near to ({{ coordinate.latitude }} , {{ coordinate.longitude }})</h1>
      <h2>Scanning a {{ radius }} km radius</h2>
      <img src="../assets/rotatingEarth.gif" alt="Rotating planet Earth">
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loadingpage',
  
  mounted() {
    this.getLocation()
  },
  
  data() {
    var coordinate = {
      latitude: this.$store.getters.selectedCoordinates[0],
      longitude: this.$store.getters.selectedCoordinates[1]
    };
    
    const paramCoordinates = coordinate.latitude.toString()+","+coordinate.longitude.toString();

    return{
      coordinate,
      paramCoordinates,
      radius: 0,
    };
  },

  computed: {
    success: function() {
      if ( this.radius < 1000 ) return true;
      else return false;
    }
  },
  

  methods: {
    back: function () {
      this.$store.commit("resetApp");
      this.$store.commit("setAppState", "selectCoords");
    },

    scanLocations: function ( radius ) {
      return new Promise(resolve => {

        const paramRadius = radius * 1000;

        const locations = axios.get( "https://api.openaq.org/v1/measurements", {
          params: {
            limit: 5,
            coordinates: this.paramCoordinates,
            radius: paramRadius,
          }
        })
        .then (function (response) {
          let fetchedData = response.data.results;
          if ( fetchedData.length == 5 ) { //if data exists, store it
            return [ true, fetchedData[0].country, fetchedData[0].city, fetchedData[0].location ];
          }
          else return [false];
        })
        .catch (function (error) {
          console.log("An error has occured during testing for params");
          console.log(error);
        })

        resolve(locations);
      });
    },

    getLocation: async function () {
      var data;
      do{
        //Increment radius - larger increments as radius increases
        if ( this.radius < 20 ) this.radius += 2;
        else if ( this.radius < 100 ) this.radius += 5;
        else if ( this.radius < 500 ) this.radius += 20;
        else if ( this.radius < 1000 ) this.radius += 50;
        else break; //If radius > 1000 km give up

        const results = await this.scanLocations( this.radius )
        
        data = results;
      } while ( data[0] == false )

      if ( data[0] == true ) { //If a location was found, commit to store
        this.$store.commit("setAppState", "resultCoords");
        this.$store.commit("setCountryCode", data[1]);
        this.$store.commit("setCity", data[2]);
        this.$store.commit("setLocation", data[3]);
      }
    }
  }

};
</script>

<style scoped>
h1 {
  margin-top: 1em;
  font-size: 1.6em;
}
h2 {
  margin-top: 1em;
  font-size: 1.4em;
}
img {
  margin-top: 3em;
}
</style>