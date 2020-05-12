<template>
  <div class="carted_puzzles">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="carted_puzzle.id" v-for="carted_puzzle in carted_puzzles">
      <p>Id# {{carted_puzzle.id}}</p>
      <!-- <p>{{puzzle.name}}</p> -->
  
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
      carted_puzzles: []
    };
  },
  created: function() {
    axios.get("/api/carted_puzzles").then(response => {
      console.log('here are your carted puzzles');
      this.carted_puzzles = response.data;
      console.log(response.data);
    });
  },
  methods: {}
};
</script>