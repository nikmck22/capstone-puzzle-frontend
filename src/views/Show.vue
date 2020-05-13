<template>
  <div class="show">
    <!-- <h1>{{ message }}</h1> -->
      <h4>Id# {{puzzle.id}}</h4>
      <img v-bind:src="puzzle.img_url">
      <h3>{{ puzzle.name }}</h3>
      <p>{{puzzle.rating_id}}</p>
      <p>{{puzzle.format}}</p>
      <p>{{puzzle.pieces}}</p>
      <p>{{puzzle.category}}</p>
      <p>{{puzzle.description}}</p>
      <br>
      <!-- <router-link v-bind:to="`/puzzles/${puzzle.id}`">Add to Cart</router-link> -->
      <button v-on:click="addToCart()">Add to Cart</button>
      


      <hr>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      puzzle: {}
    };
  },
  created: function() {
    axios.get("/api/puzzles/" + this.$route.params.id).then(response => {
      this.puzzle = response.data;
      console.log(response.data);
    });
  },
  methods: {


    addToCart: function() {
      var params = {
        puzzle_id: this.puzzle.id,
        status: "carted"
      };
      console.log('puzzle added to cart');
      axios.post("/api/carted_puzzles", params).then(response => {
        console.log(response.data);
      });

    },
  }
};
</script>