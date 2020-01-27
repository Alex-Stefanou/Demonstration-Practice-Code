<template>
  <div class="hello">
    <h1>{{ country }}</h1>
    <button v-on:click="getNextCountry">Next country</button>
  </div>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'fetchData',

  data () {
    return {
      data: [],
      country: "",
      i: 0,
    }
  },

  mounted() {
    this.$store.updateAllCountries();
    this.data = $store.getters.allCountries;
  },

  methods: {
    getNextCountry: function() {
      this.country = this.data[this.i].name;
      this.i++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
