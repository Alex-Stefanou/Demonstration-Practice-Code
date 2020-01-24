<template>
  <div class="column is-one-third-tablet">

    <div class="field">
      <label class="label">Forename</label>
      <div class="control">
        <input v-model="tempUser.forename" class="input" type="text">
      </div>
    </div>

    <div class="field">
      <label class="label">Surname</label>
      <div class="control">
        <input v-model="tempUser.surname" class="input" type="text">
      </div>
    </div>

    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input v-model="tempUser.age" class="input" type="text" @keyup.enter="submit">
      </div>
      <p class="help">{{age.message}}</p>
    </div>

    <div class="field">
      <div class="control">
        <button v-on:click="submit" class="button">Submit</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Box5-form',

  data() {
    return{
      tempUser: {
        forename: "",
        surname: "",
        age: "",
      },
      
      age: {
        valid: true,
        message: "",
      },
    };
  },

  methods: {
    validateAge() { //basic validation: checks age is a number
      let digits = (this.tempUser.age.match(/\d/g) || []).length;
      let length = this.tempUser.age.length;
      if ( digits == length ) {
        this.age.valid = true;
        this.age.message = "";
      }
      else {
        this.age.valid = false;
        this.age.message = "Please enter age using digits.";
      }
    },

    clearForm() { //Resets form variables to initial state
      this.tempUser.forename = "";
      this.tempUser.surname = "";
      this.tempUser.age = "";
      this.age.valid = true;
    },

    submit: function() { //Validates and passes data
      this.validateAge();
      if( this.age.valid ) {
        this.$emit("exportUser", JSON.stringify(this.tempUser));
        this.clearForm();
      }
    },
  },
};
</script>

<style scoped>
.column {
  border-color: #112d4e;
  background-color: #dbe2ef;
}

.button, .input {
  border-color: #3f72af;
  background-color: #f9f7f7;
}
</style>
