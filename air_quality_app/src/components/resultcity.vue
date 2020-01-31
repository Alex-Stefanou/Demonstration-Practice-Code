<template>
  <div>
    <div>
      <h1>Air Quality for the last {{ currentPeriod}} days in {{ selectedCity }}, {{ selectedCountry }}</h1>
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
      <canvas id="AQchart"></canvas>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

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
        currentPeriod: 30,
        localParameters,
        periods: ["Week", "Month", "3 Months"],
        selectedCity: this.$store.getters.selectedCity,
        selectedCountry: this.$store.getters.selectedCountry[0],
        xDates: [],
        yValues: [],
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
    changeParameter (e) {
      this.currentParameter = e.toElement.id;
    },

    changePeriod (e) {
      switch ( e.toElement.id ) {
        case "Week": this.currentPeriod = 7; break;
        case "Month": this.currentPeriod = 30; break;
        case "3 Months": this.currentPeriod = 90; break;
        default: this.currentPeriod = 30; break;
      }
    },

    createGraph ( chartID ) {
      var ctx = document.getElementById("AQchart").getContext('2d');

      var myChart = new Chart (ctx, {
        type: 'line',
        data: {
          yValues,
          xDates,
        }
      });
    }

    fetchGraphingData ( param, period ) {
      const Limit = 9999;
      this.xDates = [];
      this.yValues = [];

      let that = this;
      let currentDate = new Date();

      for (var days = 0; days < period; days++) {
        const startDate = new Date();
        const endDate = new Date();

        startDate.setDate( currentDate.getDate() - days - 1 );
        endDate.setDate( currentDate.getDate() - days );

        this.xDates.push( startDate.toString().slice(0, 10) );
        axios.get( "https://api.openaq.org/v1/measurements", {
          params: {
            limit: Limit,
            country: this.$store.state.selectedCountry[1],
            city: this.$store.state.selectedCity,
            parameter: param,
            date_from: startDate,
            date_to: endDate,
          }
        })
        .then (function (response) {
          let sumFetchedValues = 0;
          let numResults = response.data.results.length;
          for( let k = 0; k < numResults; k++ ) {
            sumFetchedValues += response.data.results[k].value;
          }
          let averageValue = sumFetchedValues / numResults;
          averageValue = Math.round( averageValue * 100 ) / 100; //round to 2 decimal places
          console.log("averageValue was: "+averageValue);
          that.yValues.push( averageValue );
        })
        .catch (function (error) {
          console.log("An error has occured during testing for params");
          console.log(error);
        })
      }
    },
  },
};
</script>

<style scoped>

</style>