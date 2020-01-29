import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appState: "home",
    allCities: [],
    allCountries: [],
    selectedCity: "",
    selectedCountry: "",
  },
  
  //dispatch for actions -- commit for mutations (arguements come after)

  mutations: { //UPDATE THIS AS MORE STATES ARE ADDED
    resetApp (state) {
      state.appState = "home";
      state.selectedCity = "";
      state.selectedCountry = "";
      console.log("Application has been reset");
    },

    setCity (state, city) {
      state.selectedCity = city;
      console.log("selectedCity updated to: " + city);
    },

    setCountry (state, country) {
      state.selectedCountry = country;
      console.log("selectedCountry updated to: " + country);
    },

    setAppState (state, newState) {
      state.appState = newState;
      console.log("appState updated to: " + newState);
    },

    setAllCities (state, cities) {
      state.allCities = cities;
    },

    setAllCountries (state, countries) {
      state.allCountries = countries;
    }
  },
  
  actions: {
    updateAllCities (context) {
      axios.get( "https://api.openaq.org/v1/cities?limit=999", {
          params: {
            country: this.state.selectedCountry
          }
        })
        .then (function (response) {
          console.log("reults of city fetch are" + response)
          context.commit("setAllCities", response.data.results);
          console.log("AllCities set to: " + response.data.results);
        })
        .catch (function (error) {
          console.log("An error has occured during updateAllCities()");
          console.log(error.response);
        })
    },

    updateAllCountries (context) {
      axios.get( "https://api.openaq.org/v1/countries?limit=999" )
        .then (function (response) {
          context.commit("setAllCountries", response.data.results);
        })
        .catch (function (error) {
          console.log("An error has occured during updateAllCountries()");
          console.log(error.response);
        })
    },
  },

  getters: {
    appState: state => state.appState,
    allCities: state => state.allCities,
    allCountries: state => state.allCountries,
  },
})