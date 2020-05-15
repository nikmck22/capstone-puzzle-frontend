<template>
  <div class="carted_puzzles">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="carted_puzzle.id" v-for="carted_puzzle in carted_puzzles">
        <p>Id#: {{carted_puzzle.id}} - PuzzleId: {{ carted_puzzle.puzzle_id }} {{ carted_puzzle.puzzle }}</p>
        <!-- <div v-if="currentCartedPuzzle === CartedPuzzle"> -->
          <button v-on:click="orderPuzzle(carted_puzzle)">Let's Order!</button>
          <button v-on:click="removeFromCart(carted_puzzle)">Remove from Cart</button>
        <!-- </div> -->
    </div>
    <!-- <div v-else-if="">
      <p>There are no puzzles in your cart</p>
    </div> -->

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      carted_puzzles: [],
      currentCartedPuzzle: {}
    };
  },
  created: function() {
    axios.get("/api/carted_puzzles").then(response => {
      console.log('here are your carted puzzles');
      this.carted_puzzles = response.data;
      console.log(response.data);
    });
  },

  // var getPuzzleInfo = function() {
  //   return 
  // };

  methods: {

    // cartInfo: function(CartedPuzzle) {
    //   this.currentCartedPuzzle = CartedPuzzle;
    // },

    orderPuzzle: function(carted_puzzle) {      
      console.log('trying to order');
      console.log(carted_puzzle);
      axios.post("/api/orders").then(response => {
        console.log('puzzle order complete');
        console.log(response.data);
      });
    },
 
    removeFromCart: function(carted_puzzle) {      
      console.log('trying to remove');
      console.log(carted_puzzle);
      axios.delete("/api/carted_puzzles/" + carted_puzzle.id).then(response => {
        console.log('puzzle removed from cart');
        console.log(response.data);
      });
    },

    // emptyCart: function() {
    //   axios.get("/api/carted_puzzles").then(response => {
    //     if (response.data === 'true') {
    //       console.log('NO PUZZLES');
    //     }
    //   });
    // }
  }
};
</script>


