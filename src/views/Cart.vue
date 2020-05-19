<template>
  <div id="main-wrapper">
    <div class="container">
      <div id="content">
        <article>
          <h2>Here is your cart - ready to order?</h2>

            <div v-bind:key="carted_puzzle.id" v-for="carted_puzzle in carted_puzzles">
              <p>Id# {{ carted_puzzle.puzzle_id }}</p>
              <img v-bind:src="carted_puzzle.puzzle.img_url" height="200px">
              <p>Puzzle Name: {{ carted_puzzle.puzzle.name }} || Number of Pieces: {{carted_puzzle.puzzle.pieces}} || Format: {{carted_puzzle.puzzle.format}} || Category: {{carted_puzzle.puzzle.category}}</p>
                <button v-on:click="orderPuzzle(carted_puzzle)">Let's Order!</button>
                <button v-on:click="removeFromCart(carted_puzzle)">Remove from Cart</button>
            </div>

        </article>
      </div>
    </div>
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
      currentCartedPuzzle: {},
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
      var params = {
        puzzle_id: carted_puzzle.puzzle.id
      };
      console.log('trying to order');
      // console.log(carted_puzzle);
      console.log(carted_puzzle.puzzle.id)
      axios.post("/api/orders", params).then(response => {
        console.log('puzzle order complete');
        console.log(response.data);
        this.$router.push('/orders');
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
    // addToCart: function() {
    //   var params = {
    //     puzzle_id: this.puzzle.id,
    //     status: "carted"
    //   };
    //   console.log('puzzle added to cart');
    //   axios.post("/api/carted_puzzles", params).then(response => {
    //     console.log(response.data);
    //     this.$router.push('/carted_puzzles');
    //   });

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


