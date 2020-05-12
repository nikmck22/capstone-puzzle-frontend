<template>
  <div class="index">
		<div id="features-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-4 col-12-medium" v-for="puzzle in puzzles">

						<!-- Box -->
							<section class="box feature">
								<!-- <div> -->
									<a v-bind:href="`/puzzles/{$puzzle.id}`" class="image featured"><img v-bind:src="puzzle.img_url" alt="" /></a>
									<div class="inner">
										<header>
											<h2>{{ puzzle.name }}</h2>
											<p>{{ puzzle.category }}</p>
										</header>
										<p>{{ puzzle.description }}</p>
										<router-link v-bind:to="`/puzzles/${puzzle.id}`">More details</router-link>
									<!-- </div> -->
								</div>
							</section>

					</div>
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