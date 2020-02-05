<template>
  <div>
    <button @click="navigate" id="back" class="button is-small">back</button>
    <button @click="navigate" id="home" class="button is-small">home</button>
    <h1>Air Quality App</h1>
  </div>
</template>

<script>
export default {
  name: 'navbar',

  methods: {
    navigateBack ( appState ) {
      switch (appState) {
        case "selectCountry": this.$store.commit("setAppState", "home");          break;
        case "selectCity":    this.$store.commit("setAppState", "selectCountry"); break;
        case "resultCity":    this.$store.commit("setAppState", "selectCity");    break;
        case "selectCoords":  this.$store.commit("setAppState", "home");          break;
        case "resultCoords":  this.$store.commit("setAppState", "selectCoords");  break;

        case "home": console.log("You are already home, why can you see the navbar?"); break;
        default: console.log("Error: appState has taken an unexpected value and the back button does not know what to do. Send help"); break;
      }
      console.log("Navigated back to: " + this.$store.getters.appState)
    },

    navigate: function(e) {
      if ( e.toElement.id == "home" ) this.$store.commit("resetApp");
      else if ( e.toElement.id == "back" ) this.navigateBack( this.$store.getters.appState );
      else console.log("Navigation from navbar failed.")
    }
  },
  
};
</script>

<style scoped>
h1 {
  line-height: 1.6em;
  font-size: 1.2em;
}

#back {
  float: left;
}
#home {
  float: right;
}

.button{
  margin-left: 1em;
  margin-right: 1em;
}

</style>