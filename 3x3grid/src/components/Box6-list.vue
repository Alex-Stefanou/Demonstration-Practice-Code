<template>
  <div class="column is-one-third-tablet">
    <h1>List of users:</h1>
    <div class="table-container">
      <table class="table">
        <thead>
          <th>Forename</th>
          <th>Surname</th>
          <th>Age</th>
        </thead>
        <tbody>
          <th>John</th>
          <th>Doe</th>
          <th>32</th>
          <th><button>Delete</button></th>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box6-list',

  props: {
    tempUser: {type: Object}
  },

  data() {
    return{
      userList: [],
    };
  },

  watch: {
    tempUser: function() {
      this.userList.push(this.tempUser);
    }
  },

  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>
