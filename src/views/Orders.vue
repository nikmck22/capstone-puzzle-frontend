<template>
				<div id="main-wrapper">
					<div class="container">
						<div class="row gtr-400">
							<div class="col-12 col-12-large">

								<!-- Sidebar -->
									<div id="sidebar">
										<section class="widget thumbnails">
											<h3>My Recent Puzzle Orders</h3>
											<div class="grid">
												<div class="row gtr-50">
													<div class="col-6" v-bind:key="order.id" v-for="order in orders"><p class="image fit">Order# {{order.id}} - {{order.puzzle.name}}<img v-bind:src="order.puzzle.img_url" alt="" height="400px" /></p></div>
												</div>
											</div>
											<a href="/puzzles" class="button icon fa-file-alt">Let's order MORE!</a>
										</section>
									</div>

							</div>
							<div class="col-8 col-12-medium imp-medium">

								<!-- Content -->
									<div id="content">
										<section class="last">
											<h2>Past Orders</h2>
											<p>Thank you for your interest in our puzzles! We hope that you have had fun puzzling and will continue to order from us often. We will be adding more and more puzzles every day! Once you're done with your puzzles, share a picture of your completed puzzle so everyone can compliment you on your awesomeness!</p>
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