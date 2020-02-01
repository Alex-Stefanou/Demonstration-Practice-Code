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

    <div class="chart-container">
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

  mounted() {
    this.createGraph();
  },

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
    },

    yValues: function() { //Only render the graph after all data has been fetched
      if (this.yValues.length == this.xDates.length) {
        this.createGraph();
      }
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

    createGraph () {
      var ctx = document.getElementById("AQchart").getContext('2d');
      console.log("chart being created with x values: "+this.xDates+" and y values "+this.yValues);
      var myChart = new Chart (ctx, {
        type: 'line',
        data: {
          labels: this.xDates,
          datasets: [{
            label: this.currentParameter,
            data: this.yValues,
          }]
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Date", 
              },
            }], 
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Air quality (µg/m³)",
              },
              ticks: {
                beginAtZero: true,
                // padding: 25,
              }
            }],
          }
        }
      });
    },

    fetchGraphingData ( param, period ) {
      const Limit = 9999;
      this.xDates = [];
      this.yValues = [];

      let currentDate = new Date();
      let valuesContainer = [];

      for (var days = 0; days < period; days++) {
        const startDate = new Date();
        const endDate = new Date();

        startDate.setDate( currentDate.getDate() - days - 1 );
        endDate.setDate( currentDate.getDate() - days );

        this.xDates.unshift( startDate.toString().slice(4, 10) );
        // this.xDates.unshift( startDate );
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
          if ( averageValue < 0 ) averageValue = 0;
          valuesContainer.unshift( averageValue );
        })
        .catch (function (error) {
          console.log("An error has occured during testing for params");
          console.log(error);
        })
      }
      this.yValues = valuesContainer;
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 80%;
  margin: auto;
}
</style>