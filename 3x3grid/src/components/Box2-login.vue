<template>
  <div class="column is-one-third-tablet">
    <h1>Sign in:</h1>
    <div>
      <input v-model="username" type="text" class="input" placeholder="Username">
      <input v-model="password" type="password" class="input" placeholder="Password">
    </div>
    <button v-on:click="login" class="button">Log in</button>
    <span>{{loginMessage}}</span>
  </div>
</template>

<script> // use toLocaleTimeString()

export default {
  name: 'Box2-login',

  data: function() {
    return{
      username: "",
      password: "",
      loginMessage: "",
    };
  },
/* 
  mounted: function() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }, */

  methods: {
    loginmessage (success){
      if ( success ) return "Sign in successful";
      else return "Incorrect username or password";
    },

    login: function() {

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  text-align: left;
}

.loginMessage {
  padding: 1em;
}

</style>
