<template>
  <div>
    <h1>Select a city</h1>

    <input v-model="search" class="input" type="text">

    <div class="table-container">
      <table class="table">

        <tbody>
          <tr v-for="(City,i) in displayedCities" :key="i">
            <td @click="navigateCity" v-bind:id="City">{{ City }}</td>
          </tr>
        </tbody>

      </table>
    </div>

    <span v-for="(page,j) in pageNumbers" :key="j">
      <span @click="changePage" v-bind:id="page"> {{ page }} |</span>
    </span>

  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'selectCity',
  
  /* Tell store to initialise list of countries from api */
  mounted() {
    this.$store.dispatch("updateAllCities");
  },

  data () {
    return {
      currentPage: 1,
      displayedCities: [],
      filteredCities: [],
      pageSize: 20,
      search: "",
    }
  },

  computed: {
    allCities () { //Clean data from api and store in an array that will not be altered
      let listCities = []
      for (let i = 0; i < this.$store.getters.allCities.length; i++) {
        listCities.push( this.$store.getters.allCities[i].name ); //load just the city names into a new array
      }
      
      for (let i = 0; i < listCities.length; i++) {
        while ( listCities[i] == undefined ) { //Remove elements with no city name
          listCities.splice ( i, 1);
        }
      }
      return listCities.sort();  //sort alphabetically
    },

    pageNumbers () { //calculate how many pages there should be + pushes to array for display
      let pages = [];
      let maxPages = Math.ceil( this.filteredCities.length / this.pageSize );
      for ( let i = 0; i < maxPages; i++) {
        pages.push( i + 1 );
      }
      return pages;
    }
  },

  watch: {
    allCities: function() { //When page first loads, makes sure the list displays
      if (this.filteredCities.length == 0 ) this.filteredCities = this.allCities;
    },

    currentPage: function() { //When user selects a page this calls a display change
      this.displayPage( this.currentPage );
    },

    filteredCities: function() { //When user uses search bring list back to page 1
      this.displayPage( 1 )
    },

    search: function() {  //Filter list of countries on search
      this.filterCities();
    }
  },

  methods: {
    changePage (e) {  //Changes currentPage when user clicks a page number
      this.currentPage = parseInt( e.toElement.id );
    },

    displayPage ( page ) { //Changes which section of the country list is displayed at a time i.e. different pages
      --page;
      this.displayedCities = this.filteredCities.slice( page * this.pageSize, (page + 1) * this.pageSize);
    },

    filterCities () {  //Performs search anywhere in country name (case insensitive)
      this.filteredCountries = [];

      for ( let i = 0; i < this.allCities.length; i++) {
        if ( this.allCities[i].toLowerCase().includes( this.search.toLowerCase() ) ) {
          this.filteredCountries.push( this.allCities[i] );
        }
      }
    },

    navigateCity (e) { //Commit country selection to store and proceed to city selection
      this.$store.commit("setAppState", "resultCity");
      this.$store.commit("setCity", e.toElement.id);
    }
  }
  
};
</script>

<style scoped>
.table {
  margin: auto;
}
.table-container {
  width: 80%;
  margin: auto;
}


</style>