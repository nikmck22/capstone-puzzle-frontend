<template>
  <div class="orders">
    <!-- <h1>{{ message }}</h1> -->
    <div v-bind:key="order.id" v-for="order in orders">
        <p>Id#: {{order.id}}</p>
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