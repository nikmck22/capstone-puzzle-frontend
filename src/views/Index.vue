<template>
  <div class="index">
		<div id="features-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-4 col-12-medium" v-for="puzzle in puzzles">

						<!-- Box -->
							<section class="box feature">
								<!-- <div> -->
									<a v-bind:href="`/puzzles/{$puzzle.id}`" class="image featured">
								
    <!-- <div class="text">Hello World</div> -->
 
									<img v-bind:src="puzzle.img_url" alt="" height="300px" /></a>
									<div class="inner">
										<header>
											<h2>{{ puzzle.name }}</h2>
											<p>{{ puzzle.category }}</p>
										</header>
									
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

/* 
.image {
  display: block;
	width: 100%;
	outline: 0;
	height: auto;
	margin: 0 0 2.5em 0;
}

.image.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .image.overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
} */

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