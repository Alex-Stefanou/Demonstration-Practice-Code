<template>
  <div>
    <div>
      <h1>Coordinates page will go here</h1>
      <button @click="fetchCities">Fetch cities</button>
      <button @click="next">Next City</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'selectCoords',

  data() {
    return{
      cities: [],
      i: 0,
    };
  },

  mounted() {},

  methods: {
    fetchCities: function() {
      let that = this;
      axios.get( "https://api.openaq.org/v1/cities" )
      // , {
      //     params: {
      //       country: this.state.selectedCountry
      //     }
      //   }
        .then (function (response) {
          console.log(response);
          that.cities = response.data.results;
          console.log("Cities set");
        })
        .catch (function (error) {
          console.log("An error has occured during fetchCities()");
          console.log(error);
        })
    },

    next: function() {
      this.i++
    }
  },
};
</script>

<style scoped>

</style>