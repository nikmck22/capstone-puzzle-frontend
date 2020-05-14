<template>
  <div class="carted_puzzles">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="carted_puzzle.id" v-for="carted_puzzle in carted_puzzles" v-if="carted_puzzle.status === 'carted'">
        <p>Id#: {{carted_puzzle.id}} - PuzzleId: {{ carted_puzzle.puzzle_id }} {{ carted_puzzle.puzzle }}</p>
        <button v-on:click="removeFromCart(this.carted_puzzle)">Remove from Cart</button>
    </div>
    <div v-else-if="carted_puzzle.status !== 'carted'">
      <p>There are no puzzles in your cart</p>
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
    removeFromCart: function() {
      axios.delete(`/api/carted_puzzles/${this.carted_puzzle.id}`).then(response => {
        console.log('puzzle removed from cart');
        console.log(response.data);
      });
    }
  }
};
</script>


