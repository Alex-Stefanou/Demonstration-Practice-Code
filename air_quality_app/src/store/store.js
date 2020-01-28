import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appState: "home",
    allCountries: [],
  },
  
  //dispatch for actions -- commit for mutations (arguements come after)

  mutations: { //UPDATE THIS AS MORE STATES ARE ADDED
    resetApp (state) {
      state.appState = "home";
      console.log("Application has been reset");
    },

    setAppState (state, newState) {
      state.appState = newState;
      console.log("app state updated to: " + newState);
    },

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
    appState: state => state.appState,
    allCountries: state => state.allCountries,
  },
})