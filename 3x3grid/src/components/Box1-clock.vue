<template>
  <div class="column is-one-third-tablet">
    <h1>The time is</h1>
    <div class="clock">
      <span>{{hours}}:</span>
      <span>{{minutes}}</span>
      <span id="seconds">{{seconds}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box1-clock',

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

<style scoped>

h1 {
  font-size: 1.5em;
  font-weight: 600;
  color: #6a2c70
}

#seconds {
  font-size: 0.4em;
}

.clock {
  padding-top: 5vh;
  padding-left: 0.5em;
  font-size: 2.5em;
  font-weight: 800;
  color: #b83b5e;
}

.column {
  border-color: #f08a5d;
  background-image: linear-gradient(to top left, #f08a5d, #f9ed69 40%);
}

</style>
