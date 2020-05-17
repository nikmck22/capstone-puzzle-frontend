<template>
	<div id="page-wrapper">
				<div id="main-wrapper">
					<div class="container">
						<div class="row gtr-200">
							<div class="col-8 col-12-medium">
								<div id="content">
										<article>

											<h2>{{ puzzle.name }}</h2>

                        <img v-bind:src="puzzle.img_url" height="300px">

											<h3>Puzzle Description</h3>
                        <p>{{puzzle.description}}</p>

										</article>

								</div>
							</div>
							<div class="col-4 col-12-medium">
								<div id="sidebar">

									<!-- Sidebar -->
										<section>
											<h3>Rate this puzzle</h3>
											<p><Rating :grade="theRating" :maxStars="5" :hasCounter="true" v-on:selectStars="selectStars" /></p>
											<footer>
												<button v-on:click="addToCart()">Add this Puzzle to My Cart!</button>
											</footer>
										</section>

										<section>
											<h3>More details:</h3>
											<ul class="style2">
												<li>Format: {{puzzle.format}}</li>
                        <li>Number of Pieces: {{puzzle.pieces}}</li>
                        <li>Category: {{puzzle.category}}</li>
                        <li>Avg. Rating: {{puzzle.rating_number}}</li>
                        <li>Puzzle ID# {{puzzle.id}}</li>
											</ul>
										</section>

								</div>
							</div>
						</div>
					</div>
				</div>



			</div>

</template>



		
<style>
 #show {
	padding-left: 30px;
}
</style>

<script>
import axios from "axios";
import Rating from '../components/Rating.vue';


export default {
  data: function() {
    return {
      puzzle: {},
      theRating: 1
    };
  },
  created: function() {
    axios.get("/api/puzzles/" + this.$route.params.id).then(response => {
      this.puzzle = response.data;
      console.log(response.data);
    });
  },

  name: 'App',
  components: {
    Rating
  },

  methods: {

    addToCart: function() {
      var params = {
        puzzle_id: this.puzzle.id,
        status: "carted"
      };
      console.log('puzzle added to cart');
      axios.post("/api/carted_puzzles", params).then(response => {
        console.log(response.data);
        this.$router.push('/carted_puzzles');
      });

    },

    selectStars: function(stars) {
      this.puzzle.rating_number = stars;
      var params = {
        rating_number: this.puzzle.rating_number,
        puzzle_id: this.puzzle.id,
      };
      axios.post("/api/puzzle_ratings", params).then(response => {
        console.log(response.data);
        console.log('this puzzle has been rated');
      });
      var params = {
        rating_number: this.puzzle.rating_number
      };
      axios.patch(`/api/puzzles/${this.puzzle.id}`, params).then(response => {
        console.log(response.data);
        console.log('average rating');
      });
    },
  }
};
</script>