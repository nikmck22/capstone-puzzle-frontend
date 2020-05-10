<template>
  <div class="index">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="puzzle.id" v-for="puzzle in puzzles">
      <p>Id# {{puzzle.id}}</p>
      <p>{{puzzle.name}}</p>
      <p>{{puzzle.rating_id}}</p>
      <p>{{puzzle.format}}</p>
      <p>{{puzzle.pieces}}</p>
      <p>{{puzzle.category}}</p>
      <p>{{puzzle.description}}</p>
      <img v-bind:src="puzzle.img_url">
      <hr>

      <router-link v-bind:to="`/puzzles/${puzzle.id}`">More details</router-link>
  
      <!-- <a v-if="puzzle.id === $parent.getPuzzleId()" v-bind:href="`/puzzles/${puzzle.id}`">Rate this Puzzle</a> -->
      <!-- FOR RATINGS -->
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
      puzzles: []
    };
  },
  created: function() {
    axios.get("/api/puzzles").then(response => {
      this.puzzles = response.data;
      console.log(response.data);
    });
  },
  methods: {}
};
</script>