import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allCountries: [],
  },
  
  mutations: {
    setAllCountries (state, countries) {
      state.allCountries = countries;
    }
  },
  
  actions: {
    updateAllCountries (context) {
      axios.get("https://api.openaq.org/v1/countries")
        .then(function (response) {
          context.commit("setAllCountries", response.data.results);
          console.log("Successfully updated allCountries");
        })
        .catch(function (error) {
          console.log("An error has occured during updateAllCountries()");
          console.log(error.response);
        })
    },
  },

  getters: {
    allCountries: state => state.allCountries
  },
})