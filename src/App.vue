<template>
  <div id="app">

    <!-- Header -->
    <div id="header-wrapper">
      <header id="header" class="container">

          <!-- Logo -->
        <div id="logo">
          <h1><router-link to="/puzzles">Rent.js</router-link></h1>
          <p>A place to Rent Jigsaw puzzles</p>
        </div>

        <!-- Nav -->
        <nav id="nav">
          <ul>
            <li class="current"><router-link to="/puzzles">Puzzle Catalog</router-link></li>
            <li><router-link to="/carted_puzzles">Cart</router-link></li>
            <li><router-link to="/orders">My Orders</router-link></li>
            <li><router-link to="/users/:id">User Dashboard</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/logout">Logout</router-link></li>
          </ul>
        </nav>
      </header>
    </div>

    <!-- <div v-if="$router.name === 'index'">
      <input type="text" list="categories" v-model="categoryFilter">
        <datalist id="categories">
          <option>Animals</option>
          <option>Art</option>
          <option>Food</option>
          <option>Holidays</option>
          <option>Scenery</option>
        </datalist>
    </div> -->
    
    <router-view/>

    <div class="row">
      <div class="col-12">
        <div id="copyright">
          <ul class="menu">
            <li>Contact Us: email@puzzles.com</li>
            <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">by Nikki</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '/styles/global.scss';
	#logo {
		display: inline-block;
	}

		#logo h1 {
			background: #10a0d5;
			color: #fff;
			border-radius: 6px;
			font-family: 'Oleo Script', serif;
			font-weight: 400;
			padding: 0.25em 0.2em 0.25em 0.2em;
			font-size: 3.25em;
			letter-spacing: 0.05em;
			display: inline-block;
			vertical-align: middle;
		}

		#logo span {
			font-weight: 800;
			line-height: 4.5em;
			letter-spacing: 0.025em;
			font-size: 0.9em;
			vertical-align: middle;
			margin: 0 0 0 1.25em;
		}

</style>

<script>
import Rating from './components/Rating.vue';


export default {
  data: function() {
    return {
      categoryFilter: ""
    };
  },

  beforeCreate: function() {
    document.body.className = 'home';
  },

  methods: {
    isLoggedIn: function() {
      console.log('user is logged in');
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },

    isCurrentUser: function() {
      return parseInt(localStorage.getItem("user_id"));
    },

    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },

    getPuzzleInfo: function() {
      return parseInt(localStorage.getItem("puzzle_id"));
    },

    addToCart: function() {
      console.log('puzzle has been added to cart');
    }
  }
};

</script>