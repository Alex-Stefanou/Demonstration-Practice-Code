<template>
  <div id="app">
    <div class="columns is-tablet">
      <box1/>
      <box2/>
      <box3/>
    </div>
    <div class="columns is-tablet">
      <box4 :importUser="tempUser"/>
      <box5 @exportUser="updateUser"/>
      <box6/>
    </div>
    <div class="columns is-tablet">
      <box7/>
      <box8/>
      <box9/>
    </div>
  </div>
</template>

<script>
import Box1 from './components/Box1-clock.vue'
import Box2 from './components/Box2-login.vue'
import Box3 from './components/Box3-quiz.vue'
import Box4 from './components/Box4-table.vue'
import Box5 from './components/Box5-form.vue'
import Box6 from './components/Box6-list.vue'
import Box7 from './components/Box7-search.vue'
import Box8 from './components/Box8-layout.vue'
import Box9 from './components/Box9-8ball.vue'

export default {
  name: 'app',

  components: {
    Box1,   //Digital clock
    Box2,   //Login screen
    Box3,   //Quiz
    Box4,   //Table
    Box5,   //Submit form to Box 4
    Box6,   //Toggleable item list + running total
    Box7,   //Search a list in real time
    Box8,   //Toggleable layout for list from Box 7
    Box9,   //Magic 8-ball
  },

  data() {
    return {
      tempUser: ""
    }
  },

  methods: {
    updateUser (data) {
      this.tempUser = data;
    }
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";

html, body {
  background-color: darkslategray;
  margin-top: 0.4em;
  line-height: 1;
}

h1 {
  padding-bottom: 0.2em;
  font-size: 1.2em;
  font-weight: bold;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: 100%;
  margin: 1em;
  margin-bottom: 0em;

  text-align: center;
  color: black;
}

.columns {
  margin-left: -6px;
  margin-right: 6px;
}

.column {
  height: 32vh;
  margin: 2px;

  overflow: auto;

  background-color: bisque;
  border: black solid 6px;
  border-radius: 0.5em;
}


</style>
