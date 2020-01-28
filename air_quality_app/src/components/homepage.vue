<template>
  <div>

    <div>
      <h1>Air Quality App</h1>
      <h2>Check the air quality around the globe!</h2>
    </div>

    <div>
      <div @click="navigate" id="countrySelect">Select a Country and City</div>
      - or -
      <div @click="navigate" id="coordinates">Enter a Latitude and Longditude</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homepage',

  data() {
    return{
    };
  },

  methods: {
    navigate: function(e) { //e.toElement.id
      if ( e.toElement.id == "countrySelect") this.$store.commit("setAppState", "countrySelect");
      else if ( e.toElement.id == "coordinates")   this.$store.commit("setAppState", "coordinates");
      else console.log("Navigation from homepage failed.")
    }
  },
};
</script>

<style scoped>

</style>