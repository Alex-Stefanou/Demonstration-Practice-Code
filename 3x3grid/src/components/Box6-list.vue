<template>
  <div class="column is-one-third-tablet">
    <h1>Order form:</h1>
    <div class="table-container">
      <table class="table">

        <thead>
          <th></th>
          <th>Item</th>
          <th>Price</th>
        </thead>

        <tfoot>
          <th></th>
          <th></th>
          <th>{{ Total }}</th>
        </tfoot>

        <tbody>
          <tr v-for="(Item,i) in List" :key="i">
            <td><input type="checkbox" v-model="Item.active"></td>
            <td>{{ Item.name }}</td>
            <td>{{ Item.price }}</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box6-list',

  data() {
    return{
      Total: 0,
      List: [
        {name: "Apple",       price: 1.40, active: false},
        {name: "Banana",      price: 0.80, active: false},
        {name: "Cherries",    price: 3.20, active: false},
        {name: "Grapes",      price: 1.80, active: false},
        {name: "Kiwi",        price: 0.59, active: false},
        {name: "Mango",       price: 2.99, active: false},
        {name: "Strawberries",price: 2.49, active: false},
        {name: "Watermelon",  price: 4.20, active: false},
      ],
    };
  },

/*   watch: {
    List: function(){
      this.sumActive();
    }
  },

  methods: {
    sumActive() {
      let sum = 0
      for ( let i = 0; i < this.List.length; i++) {
        if ( this.List[i].active ) sum += this.List[i].price;
      }
      return this.Total = sum;
    }
  }, */

  calculate: {
    total: function(){
      let sum = 0
      for ( var i = 0; i < 8; i++) {
        if ( this.List[i].active ) sum += this.List[i].price;
      }
      return this.Total = sum;
    },
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*Local styling here*/

</style>
