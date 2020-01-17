<template>
  <div id="app">
    <div class="columns is-tablet">
      <box1/>
      <box2/>
      <box3/>
    </div>
    <div class="columns is-tablet">
      <box1/>
      <box1/>
      <box1/>
      <!--
      <box4/>
      <box5/>
      <box6/> -->
    </div>
    <div class="columns is-tablet">
      <!--
      <box4/>
      <box5/>
      <box6/> -->
    </div>
    
    <!-- Will have form of:
    <box 1> (digital clock)
    <box 2> (login form: user & pass + button and success feedback)
    <box 3> (quiz: 4 multiple choice questions - sound on successful completion) NB check slack starred messages re:sound
    <box 4> (table of 4 coloumns the last of which deletes row)
    <box 5> (Submit form to add rows to table of box 4)
    <box 6> (list of items+price - active items toggleable, active total displayed)
    <box 7> (list of 9 items (img+title) + search bar which autofilters from first letter)
    <box 8> (duplicate list of box 7 but instead of search, toggle to display grid of images)
    <box 9> (magic 8 ball (optional animations))
    -->
  </div>
</template>

<script>
import Box1 from './components/Box1-clock.vue'
import Box2 from './components/Box2-login.vue'
import Box3 from './components/Box3-quiz.vue'

export default {
  name: 'app',

  components: {
    Box1,   //Digital clock
    Box2,   //Login screen
    Box3,   //Quiz
  },
/* 
  data() {
    return {
      
    }
  } */
}
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
