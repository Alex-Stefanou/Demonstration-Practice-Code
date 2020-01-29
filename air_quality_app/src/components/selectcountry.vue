<template>
  <div>
    <h1>Select a country</h1>

    <input v-model="search" class="input" type="text">

    <div class="table-container">
      <table class="table">

        <tbody>
          <tr v-for="(Country,i) in displayedCountries" :key="i">
            <td>{{ Country }}</td>
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
  name: 'selectCountry',
  
  /* Tell store to initialise list of countries from api */
  mounted() {
    this.$store.dispatch("updateAllCountries");
  },

  data () {
    return {
      currentPage: 1,
      displayedCountries: [],
      filteredCountries: [],
      pageSize: 20,
      search: "",
    }
  },

  computed: {
    allCountries () { //Clean data from api and store in an array that will not be altered
      let listCountries = []
      for (let i = 0; i < this.$store.getters.allCountries.length; i++) {
        listCountries.push( this.$store.getters.allCountries[i].name ); //load just the country names into a new array
      }
      
      for (let i = 0; i < listCountries.length; i++) {
        while ( listCountries[i] == undefined ) { //Remove elements with no country name
          listCountries.splice ( i, 1);
        }
      }
      return listCountries.sort();  //sort alphabetically
    },

    pageNumbers () { //calculate how many pages there should be + pushes to array for display
      let pages = []
      let maxPages = Math.ceil( this.filteredCountries.length / this.pageSize );
      for ( let i = 0; i < maxPages; i++) {
        pages.push( i + 1 );
      }
      return pages;
    }
  },

  watch: {
    allCountries: function() { //When page first loads, makes sure the list displays
      if (this.filteredCountries.length == 0 ) this.filteredCountries = this.allCountries;
    },

    currentPage: function() { //When user selects a page this calls a display change
      this.displayPage( this.currentPage );
    },

    filteredCountries: function() { //When user uses search bring list back to page 1
      this.displayPage( 1 )
    },

    search: function() {  //Filter list of countries on search
      this.filterCountries();
    }
  },

  methods: {
    changePage (e) {  //Changes currentPage when user clicks a page number
      this.currentPage = parseInt( e.toElement.id );
    },

    displayPage ( page ) { //Changes which section of the country list is displayed at a time i.e. different pages
      --page;
      this.displayedCountries = this.filteredCountries.slice( page * this.pageSize, (page + 1) * this.pageSize);
    },

    filterCountries () {  //Performs search anywhere in country name (case insensitive)
      this.filteredCountries = [];

      for ( let i = 0; i < this.allCountries.length; i++) {
        if ( this.allCountries[i].toLowerCase().includes( this.search.toLowerCase() ) ) {
          this.filteredCountries.push( this.allCountries[i] );
        }
      }
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
