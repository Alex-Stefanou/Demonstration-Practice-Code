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
// import axios from 'axios'

export default {
  name: 'selectCoords',

  data() {
    return{
      cities: [],
    };
  },

  mounted() {},

  methods: {
    fetchCities: function() {
      
    },

    next: function() {
      var currentDate = new Date();
      console.log(currentDate);

      var startDate = new Date();
      var endDate = new Date();
      for (var days = 0; days < 7; days++) {
        startDate.setDate( currentDate.getDate() - days - 1 );
        endDate.setDate( currentDate.getDate() - days );
        console.log(startDate);
        console.log(endDate);
      }
    }
  },
};
</script>

<style scoped>

</style>