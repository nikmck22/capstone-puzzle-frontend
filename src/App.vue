<template>
  <div id="app">
    <div id="page-wrapper">
      <div id="logo">
        <h1><router-link to="/puzzles">Rent.js</router-link></h1>
        <span>Rent Jigsaws</span>
			</div>
      <!-- Header -->
      <div id="header-wrapper">
        <header id="header" class="container">

          <!-- Nav -->
            <nav id="nav">
              <ul>
                <li class="current"><a href="/puzzles">Home</a></li>
                <li><router-link to="/carted_puzzles">Cart</router-link></li>
                <li><router-link to="/orders">My Orders</router-link></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </nav>

        </header>
      </div>

        <router-view/>
        <!-- STAR RATINGS -->
      <!-- <Rating :grade="3" :maxStars="5" :hasCounter="true" /> -->

	<div id="banner-wrapper">
					<div id="footer" class="box container">
						<div class="row">
							<div class="col-7 col-12-medium">
								<h3>Contact Us</h3>
								<p>1234 Fictional Road<br />
                  Nashville, TN 00000<br />
                  (800) 555-0000</p>
							</div>
						</div>
					</div>
				</div>
        <div class="row">
            <div class="col-12">
              <div id="copyright">
                <ul class="menu">
                  <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">by Nikki</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>

    </div>
</template>

<style>
@import '/styles/global.scss';


</style>

<script>
import Rating from './components/Rating.vue';


export default {
  data: function() {
    return {
      titleFilter: ""
    };
  },

  // name: 'App',
  // components: {
  //   Rating
  // },

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