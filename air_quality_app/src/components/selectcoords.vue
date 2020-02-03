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
          <p class="help">{{ helpMessage.latitude }}</p>
        </div>

        <div class="field">
          <label class="label">Longitude</label>
          <div class="control">
            <input v-model="coordinate.longitude" class="input" type="text">
          </div>
          <p class="help">{{ helpMessage.longitude }}</p>
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
// import axios from 'axios'

export default {
  name: 'selectCoords',
  
  mounted() {},
  
  data() {
    return{
      coordinate: { latitude: "", longitude: ""},
      helpMessage: { latitude: "", longitude: ""},
    };
  },

  computed: {
    valid: function() {
      if ( this.validLatitude && this.validLongitude ) return true;
      else return false;
    },

    validLatitude: function() {
      if ( !this.verifyCoord( this.coordinate.latitude, this.helpMessage.latitude ) ) return false;

      let Latitude = parseFloat( this.coordinate.latitude );
      if ( Latitude < -90 || Latitude > 90) return false;
      return true;
    },

    validLongitude: function() {
      if ( !this.verifyCoord( this.coordinate.longitude, this.helpMessage.longitude ) ) return false;

      let Longitude = parseFloat( this.coordinate.longitude );
      if ( Longitude < -180 || Longitude > 180) return false;

      return true;
    }
  },
  

  methods: {
    setCoords: function() {
      let Latitude = 0 //round the number
      let Longitude = 0
      this.$store.commit("setAppState", "resultCoords");
      this.$store.commit("setCoordinates", Latitude, Longitude);
      console.log("This will set the coordinates in the store");
    },

    //Function to check coordinate string for invalid characters
    verifyCoord: function( coord, message ) {
      var isNegative;
      if ( coord.search("-") == 0 ) isNegative = true;
      else isNegative = false;

      if ( !isNegative && coord.length < 1 ) return false;
      if ( isNegative  && coord.length < 2 ) return false;

      let digitCount = ( coord.match(/\d/g) || [] ).length; //number of digits
      let decimalPointCount = ( coord.match(/\./g) || [] ).length; //number of decimal points
      let decimalCommaCount = ( coord.match(/,/g) || [] ).length; //number of decimal commas

      if ( decimalPointCount + decimalCommaCount > 1 ) {
        message = "Too many decimal separators";
        return false;
      }

      if ( !isNegative ) {
        if ( coord.length > digitCount + decimalPointCount + decimalCommaCount ) {
          message = "Please enter coordiante using digits only";
          return false;
        }
      }
      else if ( isNegative ) {
        if ( coord.length - 1 > digitCount + decimalPointCount + decimalCommaCount ) {
          message = "Please enter coordiante using digits only";
          return false;
        }
      }

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

.input {
  width: 100%;
}

.label {
  font-size: 1.2em;
}
</style>