<template>
  <div class="cart">
    <h1>{{ message }}</h1>
    <h1>{{ info }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      info: ""
    };
  },

  // mounted() {
  //   axios
  //     .get('/api/carted_puzzles')
  //     .then(response => (this.info = response));
  // },

  created: function() {
    axios.get("/api/carted_puzzles").then(response => {
      // this.puzzle = response.data;
      console.log(response.data);
    });
  },

  methods: {}
};
</script>
