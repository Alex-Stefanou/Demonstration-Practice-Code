<template>
  <div class="column is-one-third-tablet">
    <div class="clock">
      <span id="time">{{hours}} {{minutes}}</span>
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
#seconds {
  font-size: 0.4em;
}

#time {
  word-spacing: 2em
}

.clock {
  padding-top: 10.5vh;
  padding-left: 0.5em;
  font-size: 3em;
  font-weight: 500;
  font-family: verdana;
  color: #fefbf3;
}

.column {
  background-image: url("../assets/hourglass.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120%;
  background-color: black;
}

</style>
