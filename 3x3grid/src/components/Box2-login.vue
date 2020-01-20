<template>
  <div class="column is-one-third-tablet">
    <h1>Sign in:</h1>
    <div>
      <input v-model="input.username" type="text" class="input" placeholder="Username">
      <input v-model="input.password" type="password" class="input" placeholder="Password"  @keyup.enter="login">
    </div>
    <button v-on:click="login" class="button">Log in</button>
    <span v-if="input.status === 0" class="success">Log in successful</span>
    <span v-if="input.status === 1">Enter a username and password</span>
    <span v-if="input.status === 2">Incorrect username or password</span>
  </div>
</template>

<script>
export default {
  name: 'Box2-login',

  data: function() {
    return{
      input: {
        username: "",
        password: "",
        status: -1,
      },
      userData: { //"account data" stored here
        admin: "admin",
        alex: "Hunter2"
      },
    };
  },

  methods: {
    authenticate () { //Check if an object property exsists with name==username and value===password
      if( this.userData[this.input.username.toLowerCase()] //username is not case sensitive
        &&this.userData[this.input.username.toLowerCase()] === this.input.password ) return 0;
      else return 2;
    },

    login: function() {
      if ( this.input.username != "" && this.input.password != "" ){
        return this.input.status = this.authenticate ();
      }
      else return this.input.status = 1;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  text-align: left;
}

.success {
  background-color: green;
}

</style>
