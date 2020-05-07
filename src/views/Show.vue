<template>
  <div class="show">
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

      <!-- <a v-if="puzzle.user_id === $parent.getUserId()" v-bind:href="`/puzzles/${puzzle.id}/edit`">Rate this Puzzle</a> -->
      <!-- FOR RATINGS -->

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
      puzzle: {}
    };
  },
  created: function() {
    axios.get("/api/puzzles" + this.$route.params.id).then(response => {
      this.puzzles = response.data;
      console.log(response.data);
    });
  },
  methods: {}
};
</script>