<template>
  <div class="column is-one-third-tablet">
    <h1>The time is</h1>
    <div id="clock">
      {{time}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box1-clock',
  data: {
    currentTime () {
      return {time: this.currentTime}
    }
  },
  updated: updateTime () {
    this.currentTime = 
  }
  created: setInterval() {
    setInterval(() => {
      this.tick++
    }, 1000)
}
</script>
let date = new Date()
      let currentTime = date.getHours().toString()+":"+date.getMinutes().toString();

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
