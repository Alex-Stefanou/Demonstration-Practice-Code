<template>
  <div>

    <div>
      <h1>Air Quality App</h1>
      <h2>Check the air quality around the globe!</h2>
    </div>

    <div>
      <div @click="navigate" id="selectCountry">Select a Country and City</div>
      - or -
      <div @click="navigate" id="selectCoords">Enter a Latitude and Longditude</div>
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
    navigate: function(e) {
      if ( e.toElement.id == "selectCountry" )     this.$store.commit("setAppState", "selectCountry");
      else if ( e.toElement.id == "selectCoords" ) this.$store.commit("setAppState", "selectCoords");
      else console.log("Navigation from homepage failed.")
    }
  },
};
</script>

<style scoped>

</style>