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

  data() {
    return{
      cities: [],
      i: 0,
    };
  },

  mounted() {},

  methods: {
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