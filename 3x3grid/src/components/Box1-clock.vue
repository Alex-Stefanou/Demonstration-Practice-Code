<template>
  <div class="column is-one-third-tablet">
    <h1>The time is</h1>
    <div id="clock">
      {{time}}
    </div>
  </div>
</template>

<script>
var time = {
  currentTime: "",
  hour:   0,
  minute: 0,
  second: 0
};

function updateTime(){
  let now = new Date();
  time.hour = now.getHours();
  time.minute = now.getMinutes();
  time.second = now.getSeconds();
  time.currentTime = time.hour.toString()+":"+time.minute.toString()+":"+time.second.toString();
  setTimeout(updateTime, 1000);
}

export default {
  name: 'Box1-clock',
  data: function currentTime () {
    return {time: time.currentTime,};
  },
  beforeMount() {
    updateTime();
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
