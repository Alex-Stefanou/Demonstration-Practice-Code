<template>
  <div>

    <div>
      <h1>Air Quality App</h1>
      <h2>Check the air quality around the globe!</h2>
    </div>

    <div>
      <div @click="navigate" id="selectCountry">Select a Country and City</div>
      <div class="spacer">- or -</div>
      <div @click="navigate" id="selectCoords">Enter a Latitude and Longitude</div>
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
h1 {
  margin-top: 1em;
  padding: 0;
  font-size: 4em;
  font-weight: 600;
}

h2 {
  margin-top: -0.4em;
  margin-bottom: 0.8em;
  font-size: 2em;
}

#selectCountry, #selectCoords {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 2.5em;
}

.spacer {
  font-size: 2em;
}
</style>