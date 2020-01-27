import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allCountries = [],
  },
  
  mutations: {
    updateAllCountries (state) {
      //let that = this;
      axios.get("https://api.openaq.org/v1/countries");

      .then(function (response) { // handle success
        state.allCountries = response.data.results;
        console.log("Successfully updated allCountries");
      })

      .catch(function (error) { // handle error
        console.log("An error has occured during updateAllCountries()");
        console.log(error.response);
      })
    }
  }
})