<template>
  <div>
    <div>
      <h1>Air Quality for the last 7 days in {{ selectedCity }}, {{ selectedCountry }}</h1>
      <span v-for="(parameter,j) in localParameters" :key="j">
      <span @click="changeParameter" v-bind:id="parameter"> {{ parameter }} |</span>
      </span>
    </div>
    <div>
      Graph should be displayed here
      <canvas v-bind:id="currentParameter" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'resultCity',

  mounted() {},


  /*  Due to the nature of this data set not all measurements at a given location measure all parameters.
   *  Therefore to see what data is availible for the user selected location, this section fetchs an
   *  abitrarily small amount of data (testLimit) for each parameter, and if it exists, logs that
   *  parameter in localParameters. */
  data() {
      const testLimit = 9;
      var localParameters = [];

      let that = this;
      let oneWeekAgo = new Date();
      oneWeekAgo.setDate( oneWeekAgo.getDate() - 7);
      
      for( var i = 0; i < this.$store.getters.AQparameter.length; i++) { //fetch for each possible parameter
        axios.get( "https://api.openaq.org/v1/measurements", {
          params: {
            limit: testLimit,
            country: this.$store.state.selectedCountry[1],
            city: this.$store.state.selectedCity,
            date_from: oneWeekAgo,
            parameter: this.$store.getters.AQparameter[i],  //parameter set here
          }
        })
        .then (function (response) {
          console.log(response.data.results);
          let fetchedData = response.data.results;
          if ( fetchedData.length == 9 ) { //if data exists for given parameter, store it
            that.localParameters.push( fetchedData[0].parameter );
          }
        })
        .catch (function (error) {
          console.log("An error has occured during testing for params");
          console.log(error);
        })
      }
      return {
        currentParameter: "",
        localParameters,
        selectedCity: this.$store.getters.selectedCity,
        selectedCountry: this.$store.getters.selectedCountry[0]
    };
  },

  computed: {},

  watch: {
    localParameters: function() { //When page first loads, display a parameter
      if (this.currentParameter == "" ) this.currentParameter = this.localParameters[0];
    }
  },

  methods: {
    changeParameter: function(e) {
      console.log("there has been a click!");
      this.currentParameter = e.toElement.id;
    }
    // testparam: function( param )


    // fetchAQ: function() {
    //   let that = this;
    //   let oneWeekAgo = new Date();
    //   oneWeekAgo.setDate( oneWeekAgo.getDate() - 7);

    //   axios.get( "https://api.openaq.org/v1/measurements?limit=999", {
    //       params: {
    //         country: this.$store.state.selectedCountry[1],
    //         city: this.$store.state.selectedCity,
    //         date_from: oneWeekAgo,
    //       }
    //     })
    //     .then (function (response) {
    //       console.log(response);
    //       that.cities = response.data.results;
    //       console.log("data fetched");
    //     })
    //     .catch (function (error) {
    //       console.log("An error has occured during fetchAQ()");
    //       console.log(error);
    //     })
    // },

    
  },
};
</script>

<style scoped>

</style>