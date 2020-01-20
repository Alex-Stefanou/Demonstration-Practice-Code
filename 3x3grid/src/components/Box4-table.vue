<template>
  <div class="column is-one-third-tablet">
    <h1>List of users:</h1>
    <div class="table-container">
      <table class="table">
        <thead>
          <th>Forename</th>
          <th>Surname</th>
          <th>Age</th>
        </thead>
        <tbody>
          <th>John</th>
          <th>Doe</th>
          <th>32</th>
          <th><button>Delete</button></th>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box4-table',

  data() {
    return{
      hours: String,
      minutes: String,
      seconds: String,
    };
  },

  mounted() { //on initialisation, update time every second
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },

  methods: {
    updateTime() {
      let date = new Date();
      let time = date.toLocaleString();
      this.hours = time.slice(12,14);
      this.minutes = time.slice(15,17);
      this.seconds = time.slice(18);
      return;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>
