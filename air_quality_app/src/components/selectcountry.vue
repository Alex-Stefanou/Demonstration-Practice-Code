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
  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'selectCountry',
  
  mounted() {
    this.$store.dispatch("updateAllCountries");
  },

  data () {
    return {
      search: "",
      displayedCountries: [],
    }
  },

  computed: {
    allCountries () {
      let listCountries = []
      for (let i = 0; i < this.$store.getters.allCountries.length; i++) {
        listCountries.push( this.$store.getters.allCountries[i].name );
      }
      
      for (let i = 0; i < listCountries.length; i++) {
        while ( listCountries[i] == undefined ) {
          listCountries.splice ( i, 1);
        }
      }
      return listCountries.sort();
    }
  },

  watch: {
    search: function() {
      this.filterCountries();
    }
  },

  methods: {
    filterCountries () {
      this.displayedCountries = [];

      for ( let i = 0; i < this.allCountries.length; i++) {
        if ( this.allCountries[i].toLowerCase().includes( this.search.toLowerCase() ) ) {
          this.displayedCountries.push( this.allCountries[i] );
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
