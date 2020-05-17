<template>
  <div class="index">
		<div id="features-wrapper">
			<div class="container">
					<input type="text" v-model="categoryFilter" list="categories">
					<datalist id="categories">
						<option>Animals</option>
						<option>Art</option>
						<option>Food</option>
						<option>Holidays</option>
						<option>Scenery</option>
					</datalist>
				<div class="row">
					<div class="col-4 col-12-medium" v-for="puzzle in filterBy(puzzles, categoryFilter, 'category')">
							<section class="box feature">
									<router-link v-bind:to="`/puzzles/${puzzle.id}`" class="image featured">
									<img v-bind:src="puzzle.img_url" alt="" height="300px" /></router-link>
									<div class="inner">
										<header>
											<h2>{{ puzzle.name }}</h2>
											<p>{{ puzzle.category }}</p>
										</header>
											<router-link v-bind:to="`/puzzles/${puzzle.id}`">More details</router-link>
									</div>
							</section>

					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<style>
	.box {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
		padding: 2em;
	}

		.box.feature {
			padding: 0;
		}

			.box.feature .inner {
				padding: 4em 2em 3em 2em;
			}

			.box.feature h2 {
				font-size: 1.35em;
			}

			.box.feature p {
				margin: 0;
			}

			.box.feature .image {
				position: relative;
				margin: 0;
			}

				.box.feature .image img {
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
				}

</style>

<script>
import Vue2Filters from "vue2-filters"
import axios from "axios";

export default {
	mixins: [Vue2Filters.mixin],
  data: function() {
    return {
			puzzles: [],
			categoryFilter: ''
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