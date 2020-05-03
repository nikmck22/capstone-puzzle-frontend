<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="puzzle.id" v-for="puzzle in puzzles">
      <p>Id# {{puzzle.id}}</p>
      <p>{{puzzle.name}}</p>
      <img v-bind:src="puzzle.img_url">
      <hr>
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