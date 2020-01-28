<template>
  <div class="hello">
    <h1>{{ country }}</h1>
    <button v-on:click="getNextCountry">Next country</button>
  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'countrySelect',

  data () {
    return {
      country: "",
      i: 0,
    }
  },

  mounted() {
    this.$store.dispatch("updateAllCountries");
  },

  methods: {
    getNextCountry: function() {
      this.country = this.data[this.i].name;
      this.i++;
    }
  },

  computed: {
    data () {
      return this.$store.getters.allCountries;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
