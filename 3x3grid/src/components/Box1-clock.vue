<template>
  <div class="column is-one-third-tablet">
    <h1>The time is</h1>
    <div id="clock">
      <span>{{hours}}:</span>
      <span>{{minutes}}:</span>
      <span>{{seconds}}</span>
    </div>
  </div>
</template>

<script> // use toLocaleTimeString()

export default {
  name: 'Box1-clock',

  data: function() {
    return{
      hours: String,
      minutes: String,
      seconds: String,
    };
  },

  mounted: function() {
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
