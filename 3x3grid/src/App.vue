<template>
  <div id="app">
    <div class="columns is-tablet">
      <box1/>
      <box2/>
      <box3/>
    </div>
    <div class="columns is-tablet">
      <box4 :tempUser="tempUser"/>
      <box5 @userData="passUser"/>
      <box6/>
    </div>
    <div class="columns is-tablet">
      <box1/>
      <box1/>
      <box1/>
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

export default {
  name: 'app',

  components: {
    Box1,   //Digital clock
    Box2,   //Login screen
    Box3,   //Quiz
    Box4,   //Table
    Box5,   //Submit form
    Box6,   //Toggleable item list + running total
  },

  data() {
    return {
      tempUser: {}
    }
  },

  methods: {
    passUser (userData) {
      this.tempUser = userData;
    }
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1em;
}

.column {
  background-color: bisque;
  border: brown solid 4px;
  margin: 2px;
}
</style>
