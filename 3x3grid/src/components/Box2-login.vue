<template>
  <div class="column is-one-third-tablet">
    <div class="field">
      <label>Sign in:</label>

      <div class="control">
        <input v-model="input.username" type="text" class="input" placeholder="Username">
        <input v-model="input.password" type="password" class="input" placeholder="Password"  @keyup.enter="login">
      </div>

      <div class="control">
        <button v-on:click="login" class="button">Log in</button>
        <span v-if="input.status === 0" class="success">Log in successful</span>
        <span v-if="input.status === 1" class="failure">Enter a username and password</span>
        <span v-if="input.status === 2" class="failure">Incorrect username or password</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Box2-login',

  data() {
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

label {
  font-size: 1.8em;
  font-weight: 600;
  color: #ff2e63;
}

.button {
  margin-right: 1em;
  background-color: #eaeaea;
  color: #ff2e63;
}

.column {
  text-align: left;
  border-color: #252a34;
  background-color: #08d9d6;
}

.control {
  margin-top: 0.3em;
  margin-bottom: 0.3em;
}

.failure, .success {
  padding: 0.65em;
  line-height: 2.65em;
}

.failure {
  background-image: radial-gradient(red, #08d9d6 70%)
}

.input {
  margin-bottom: 0.3em;
  border: #252a34 solid 2px;
  background-color: #eaeaea;
  color: black;
}

.success {
  background-image: radial-gradient(green, #08d9d6 70%)
}

</style>
