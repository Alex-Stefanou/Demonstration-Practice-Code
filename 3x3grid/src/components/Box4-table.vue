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
            <td><button v-on:click="deleteRow(i)" class="button">delete</button></td>
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

<style scoped>
h1 {
  color: #345d8f;
}

.age {
  text-align: right !important;
}

.button {
  height: 1.5em;
  padding-top: 0;
  border-color: #3f72af;
  background-color: #f9f7f7;
}

.column {
  border-color: #112d4e;
  background-image: linear-gradient(#dbe2ef 70%, #3f72af 150%);
}

.table {
  width: 100%;
  line-height: 1;
  background-color: #f9f7f7;
}

.table td {
  padding-bottom: 0.2em;
}
</style>
