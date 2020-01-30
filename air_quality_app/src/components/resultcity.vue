<template>
  <div>
    <div>
      <h1>Air Quality for the last 7 days in {{ selectedCity }}, {{ selectedCountry }}</h1>
    </div>

    <div>
      |<span v-for="(parameter,j) in localParameters" :key="j">
      <span @click="changeParameter" v-bind:id="parameter"> {{ parameter }} |</span>
      </span>
    </div>

    <div>
      |<span v-for="(period,i) in periods" :key="i">
      <span @click="changePeriod" v-bind:id="period"> {{ period }} |</span>
      </span>
    </div>

    <div>
      Graph should be displayed here
      <canvas id="AQchart" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'resultCity',

  /*  Due to the nature of this data set not all measurements at a given location measure all parameters.
   *  Therefore to see what data is availible for the user selected location, this section fetchs an
   *  abitrarily small amount of data (testLimit) for each parameter, and if it exists, logs that
   *  parameter in localParameters. */
  data() {
      const testLimit = 9;
      var localParameters = [];
      let that = this;
      
      for( var i = 0; i < this.$store.getters.AQparameter.length; i++) { //fetch for each possible parameter
        axios.get( "https://api.openaq.org/v1/measurements", {
          params: {
            limit: testLimit,
            country: this.$store.state.selectedCountry[1],
            city: this.$store.state.selectedCity,
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
        currentPeriod: 28,
        localParameters,
        periods: ["Week", "Month", "3 Months"],
        selectedCity: this.$store.getters.selectedCity,
        selectedCountry: this.$store.getters.selectedCountry[0]
    };
  },

  watch: {
    currentParameter: function() { //If user changes parameter replot the graph
      this.fetchGraphingData( this.currentParameter, this.currentPeriod );
    },

    currentPeriod: function() { //If user changes period replot the graph
      this.fetchGraphingData( this.currentParameter, this.currentPeriod );
    },

    localParameters: function() { //When page first loads, set a parameter
    //!!!
    //IF NO PARAMETERS CONDITION WILL GO HERE!!
    //!!!
      if (this.currentParameter == "" ) this.currentParameter = this.localParameters[0];
    }
  },

  methods: {
    changeParameter: function(e) {
      this.currentParameter = e.toElement.id;
    },

    changePeriod: function(e) {
      switch ( e.toElement.id ) {
        case "Week": this.currentPeriod = 7; break;
        case "Month": this.currentPeriod = 28; break;
        case "3 Months": this.currentPeriod = 90; break;
        default: this.currentPeriod = 28; break;
      }
    },

    fetchGraphingData: function( param, period ) {
      console.log("i'm going to make useful data to be plotted")
      console.log(param);
      console.log(period);
      // var xDates = [];
      // var yValues = [];

      // let that = this;
      // let currentDate = new Date();

      // oneMonthAgo.setDate( oneMonthAgo.getDate() - 7);
    },
  },
};
</script>

<style scoped>

</style>