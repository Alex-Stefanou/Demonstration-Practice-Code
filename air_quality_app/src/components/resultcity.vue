<template>
  <div>
    <div>
      <h1>Coordinates page will go here</h1>
      <button @click="fetchAQ">Fetch AQ</button>
      <button @click="next">Next City</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'resultCity',

  mounted() {},

  data() {
      let that = this;
      let oneWeekAgo = new Date();
      oneWeekAgo.setDate( oneWeekAgo.getDate() - 7);

      let workingParams = [];

      for( var i = 0; i < this.$store.getters.AQparameter.length; i++) {
        axios.get( "https://api.openaq.org/v1/measurements?limit=9", {
          params: {
            country: this.$store.state.selectedCountry[1],
            city: this.$store.state.selectedCity,
            date_from: oneWeekAgo,
            parameter: that.$store.getters.AQparameter[i],
          }
        })
        .then (function (response) {
          console.log(response.data.results);
          var fetchedData = response.data.results;
          if ( fetchedData.length == 9 ) {
            that.workingParams.push( fetchedData[0].parameter );
          }
          console.log("in .then, data fetched: " + fetchedData);
          console.log("as a result the length of workingParams is now: " + that.workingParams.length);
        })
        .catch (function (error) {
          console.log("An error has occured during testing for params");
          console.log(error);
        })
      }
      return {
        workingParams,
      cities: [],
      i: 0,
    };
  },

  computed: {
    // localParameter () {}
  },

  methods: {

    // testparam: function( param )


    fetchAQ: function() {
      let that = this;
      let oneWeekAgo = new Date();
      oneWeekAgo.setDate( oneWeekAgo.getDate() - 7);

      axios.get( "https://api.openaq.org/v1/measurements?limit=999", {
          params: {
            country: this.$store.state.selectedCountry[1],
            city: this.$store.state.selectedCity,
            date_from: oneWeekAgo,
          }
        })
        .then (function (response) {
          console.log(response);
          that.cities = response.data.results;
          console.log("data fetched");
        })
        .catch (function (error) {
          console.log("An error has occured during fetchAQ()");
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