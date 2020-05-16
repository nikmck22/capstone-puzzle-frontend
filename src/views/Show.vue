<template>
  <div style="padding-left: 50px;" class="show">
    <h4>Id# {{puzzle.id}}</h4>
    <img v-bind:src="puzzle.img_url">
    <h3>Name: {{ puzzle.name }}</h3>
    <p>Format: {{puzzle.format}}</p>
    <p>Number of Pieces: {{puzzle.pieces}}</p>
    <p>Category: {{puzzle.category}}</p>
    <p>Description: {{puzzle.description}}</p>
    <p>Avg. Rating: {{puzzle.rating_number}}</p>
    <button v-on:click="addToCart()">Add to Cart</button>
      <Rating :grade="theRating" :maxStars="5" :hasCounter="true" v-on:selectStars="selectStars" />
      <!-- <form v-on:submit.prevent="submit()">
        <div>
          <label>Rate this Puzzle:</label>
          <input type="text" class="form-control" v-model="puzzle.rating_number">
        </div>
          <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
      <br>
      <!-- <router-link v-bind:to="`/puzzles/${puzzle.id}`">Add to Cart</router-link> -->
      

<!--RATING-->
  <!-- <div class="rating">
    <ul class="list">
      <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i> 
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div> -->


      <hr>
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
      theRating: 2
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

  // name: 'Rating',
  // props: ['grade', 'maxStars', 'hasCounter'],

  // data() {
  //   return {
  //     stars: this.grade
  //   };
  // },


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

    ratePuzzle: function() {
      axios.post("/api/puzzle_ratings").then(response => {
        console.log(response.data);
      });
    },

    selectStars: function(stars) {
      this.puzzle.rating_number = stars;
    }

    // submit: function() {
    //   var params = {
    //     rating_number: this.puzzle.rating_number
    //   };
    //   axios.patch(`/api/puzzles/${this.puzzle.id}`, params).then(response => {
    //     console.log(response.data);
    //   });
    // }
    
    // rate(star) {
    //   if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
    //     this.stars = this.stars === star ? star - 1 : star
    //   }
    // }
  }
};
</script>