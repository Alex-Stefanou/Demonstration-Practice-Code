<template>
  <div>
    
    <h1>Searching for a location near to</h1>
    <h2>{{ coordinate.latitude }} , {{ coordinate.longitude }}</h2>

    <div>
      <img src="../assets/rotatingEarth.gif" alt="Rotating planet Earth">
    </div>
    
    <button @click="getLocation">Get location</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loadingpage',
  
  mounted() {},
  
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
  },
  

  methods: {
    scanLocations: function ( radius ) {
      return new Promise(resolve => {

        const paramRadius = radius * 1000;

        var locations = axios.get( "https://api.openaq.org/v1/measurements", {
          params: {
            limit: 5,
            coordinates: this.paramCoordinates,
            radius: paramRadius,
          }
        })
        .then (function (response) {
          let fetchedData = response.data.results;
          if ( fetchedData.length == 5 ) { //if data exists, store it
            return [ true, fetchedData[0].location, fetchedData[0].city, fetchedData[0].country ];
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

      this.radius++;
      const paramRadius = this.radius*1000;

      const results = await this.scanLocations( this.radius )
      console.log(results);
    }
  }

      // var inputCoords = this.$store.getters.selectedCoordinates;
      // const paramCoordinates = inputCoords[0].toString()+","+inputCoords[1].toString();

      // const testLimit = 5;
      // var localParameters = [];
      // var locations = [];
      // var radius = 0;
      // let that = this;
      // console.log("preparing to start loop")
      // do {
      //   radius += 10000; //Increment search radius 1km
      //   console.log("performing search with radius "+radius)
      //   axios.get( "https://api.openaq.org/v1/measurements", {
      //     params: {
      //       limit: testLimit,
      //       coordinates: paramCoordinates,
      //       radius: radius,
      //       // parameter: this.$store.getters.AQparameter[i],  //parameter set here
      //     }
      //   })
      //   .then (function (response) {
      //     let fetchedData = response.data.results;
      //     if ( fetchedData.length == 5 ) { //if data exists for given parameter, store it
      //       that.locations.push( fetchedData[0].parameter );
      //     }
      //   })
      //   .catch (function (error) {
      //     console.log("An error has occured during testing for params");
      //     console.log(error);
      //   })
      // } while ( locations.length < 1 )


};
</script>

<style scoped>
h2 {
  font-size: 1.5em;
}
img {
  margin-top: 3em;
}
</style>