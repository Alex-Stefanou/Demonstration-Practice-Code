import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    AQparameter: [ "pm25", "pm10", "so2", "no2", "o3", "co", "bc"],
    appState: "home",
    allCities: [],
    allCountries: [],
    selectedCity: "",
    selectedCoordinates: [ 0, 0],
    selectedCountry: [ "" , "" ]
  },

  mutations: { //UPDATE THIS AS MORE STATES ARE ADDED
    resetApp (state) {
      state.appState = "home";
      state.selectedCity = "";
      state.selectedCoordinates = [ 0, 0];
      state.selectedCountry = [ "" , "" ];
      console.log("Application has been reset");
    },

    setCity (state, city) {
      state.selectedCity = city;
      console.log("selectedCity updated to: " + city);
    },

    setCoordinates ( state, inputCoords ) {
      state.selectedCoordinates[0] = inputCoords[0];
      state.selectedCoordinates[1] = inputCoords[1];
      console.log("Coordinates stored in store: "+state.selectedCoordinates[0]+" , "+state.selectedCoordinates[1]);
    },

    setCountry (state, country) {
      state.selectedCountry[0] = country;
      let index = state.allCountries.findIndex( item => item.name === country );
      state.selectedCountry[1] = state.allCountries[index].code;
      console.log("selectedCountry updated to: " + country + " (code " + state.selectedCountry[1] + ").");
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
            country: this.state.selectedCountry[1]
          }
        })
        .then (function (response) {
          context.commit("setAllCities", response.data.results);
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
    AQparameter: state => state.AQparameter,
    appState: state => state.appState,
    allCities: state => state.allCities,
    allCountries: state => state.allCountries,
    selectedCity: state => state.selectedCity,
    selectedCoordinates: state => state.selectedCoordinates,
    selectedCountry: state => state.selectedCountry //N.B. Unintuitively, this is an array
  },
})