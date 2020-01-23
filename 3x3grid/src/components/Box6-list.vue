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
          <th class="price">Total:</th>
          <th class="price">£ {{ total }}</th>
        </tfoot>

        <tbody>
          <tr v-for="(Item,i) in List" :key="i">
            <td><input type="checkbox" v-model="Item.active"></td>
            <td>{{ Item.name }}</td>
            <td class="price">£ {{ Item.price.toFixed(2) }}</td>
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

  computed: {
    total: function(){
      let sum = 0
      for ( var i = 0; i < this.List.length; i++) {
        if ( this.List[i].active ) sum += this.List[i].price;
      }
      let displaySum = sum.toFixed(2);
      return displaySum;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.price {
  text-align: right !important;
}

.table {
  width: 100%;
  line-height: 1;
}

</style>
