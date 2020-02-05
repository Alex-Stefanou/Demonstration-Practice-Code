<template>
  <div>
    <div>
      <h1>Enter a latitude and longitude</h1>

      <div id="coordForm">

        <div class="field">
          <label class="label">Latitude</label>
          <div class="control">
            <input v-model="coordinate.latitude" class="input" type="text">
          </div>
          <p class="help">{{ helpMessage[0] }}</p>
        </div>

        <div class="field">
          <label class="label">Longitude</label>
          <div class="control">
            <input v-model="coordinate.longitude" class="input" type="text">
          </div>
          <p class="help">{{ helpMessage[1] }}</p>
        </div>

        <div class="field">
          <div class="control">
            <button v-if="valid" @click="setCoords" class="button">Search</button>
            <button v-else class="button is-static">Search</button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'selectCoords',
  
  data() {
    return{
      coordinate: { latitude: "", longitude: ""},
      helpMessage: [ "", "" ],
    };
  },

  computed: {
    valid: function() { //Enables submit button
      if ( this.validLatitude && this.validLongitude ) return true;
      else return false;
    },

    validLatitude: function() {
      if ( !this.verifyCoord( this.coordinate.latitude, 0 ) ) return false;
      return true;
    },

    validLongitude: function() {
      if ( !this.verifyCoord( this.coordinate.longitude, 1 ) ) return false;
      return true;
    }
  },
  
  methods: {
    setCoords: function() { //Round user input to 6 decimal places and commit to store
      let inputCoords = [ 0, 0 ]
      inputCoords[0] = Math.round( parseFloat( this.coordinate.latitude ) * 1E6 ) / 1E6;
      inputCoords[1] = Math.round( parseFloat( this.coordinate.longitude ) * 1E6 ) / 1E6;

      this.$store.commit("setAppState", "loadingpage");
      this.$store.commit("setCoordinates", inputCoords);
    },

    verifyCoord: function( coord, i ) { //Check coordinate string for invalid characters
      var isNegative;
      if ( coord.search("-") == 0 ) isNegative = true;
      else isNegative = false;

      //Checks empty search fields
      if ( !isNegative && coord.length < 1 ) return false;
      if ( isNegative  && coord.length < 2 ) return false;

      let digitCount = ( coord.match(/\d/g) || [] ).length; //number of digits
      let decimalPointCount = ( coord.match(/\./g) || [] ).length; //number of decimal points
      let decimalCommaCount = ( coord.match(/,/g)  || [] ).length; //number of decimal commas

      //If too many decimal separators
      if ( decimalPointCount + decimalCommaCount > 1 ) {
        this.helpMessage[i] = "Too many decimal separators";
        return false;
      }

      //If any non-diigit charaters
      if ( !isNegative ) {
        if ( coord.length > digitCount + decimalPointCount + decimalCommaCount ) {
          this.helpMessage[i] = "Please enter coordinate using digits only";
          return false;
        }
      }
      else if ( isNegative ) {
        if ( coord.length - 1 > digitCount + decimalPointCount + decimalCommaCount ) {
          this.helpMessage[i] = "Please enter coordinate using digits only";
          return false;
        }
      }

      //If coord is outside of accepted range
      let floatCoord = parseFloat( coord );
      if ( i == 0 ) {
        if ( floatCoord < -90 || floatCoord > 90) {
          this.helpMessage[i] = "Enter a latitude in the range -90 to 90";
          return false;
        }
      }
      else if ( i == 1 ) {
        if ( floatCoord < -180 || floatCoord > 180) {
          this.helpMessage[i] = "Enter a longitude in the range -180 to 180";
          return false;
        }
      }
      this.helpMessage[i] = "";
      return true;
    }
  },
  
};
</script>

<style scoped>
#coordForm {
  width: 40%;
  margin: auto;
  margin-top: 2em;
  text-align: left;
}

.help {
  margin-top: 0em;
  margin-left: 0.2em;
}
.input {
  width: 100%;
}

.label {
  font-size: 1.2em;
}
</style>