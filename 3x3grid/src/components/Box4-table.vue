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
          <tr v-for="(User,i) in userList" :key="i">
            <td>{{ User.forename }}</td>
            <td>{{ User.surname }}</td>
            <td class="age">{{ User.age }}</td>
            <td><button v-on:click="deleteRow(i)">delete</button></td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box4-table',

  props: {
    importUser: {type: String}
  },

  data() {
    return{
      userList: [],
    };
  },

  watch: {
    importUser: function() {
      this.userList.push(JSON.parse(this.importUser));
    }
  },

  methods: {
    deleteRow (i) {
      this.userList.splice(i,1);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.age {
  text-align: right !important;
}

.table {
  width: 100%;
  line-height: 1;
}

</style>
