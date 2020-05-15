<template>
  <div class="orders">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="order.id" v-for="order in orders">
        <p>Order Number: {{order.id}}</p>
        <p>Puzzle Information: {{order.puzzle_id}} {{ order.puzzle }}</p>
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
      orders: [],
    };
  },
  created: function() {
    axios.get("/api/orders").then(response => {
      console.log('here are your ordered puzzles');
      this.orders = response.data;
      console.log(response.data);
    });
  },


  methods: {
 
  },
};

</script>