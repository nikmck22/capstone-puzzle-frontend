<template>
  	<div id="banner-wrapper">
					<div id="banner" class="box container">
						<div class="row">
							<div class="col-7 col-12-medium">
								<h2>Welcome to Rent.js</h2>
								<p>This is where puzzlers come to rent jigsaw puzzles!</p>
							</div>
							<div class="col-5 col-12-medium">
								<ul>
									<li><router-link to="/login" class="button large icon solid fa-arrow-circle-right">Login</router-link></li>
								</ul>
							</div>
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