<template>
  					<div id="main-wrapper">
					<div class="container">
						<div id="content">

							<!-- Content -->
								<article>

									<h2>No Sidebar</h2>

									<p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
									Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
									Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
									consequat etiam lorem ipsum dolor sit amet nullam.</p>

									<h3>More intriguing information</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus
									justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis,
									ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet
									vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor.
									Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis
									rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien.
									Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi.
									Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.</p>

									<p>Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim
									quis hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu.
									Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna,
									fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium.
									Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu.
									Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.</p>

								</article>

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
      carted_puzzles: [],
      currentCartedPuzzle: {},
    };
  },
  created: function() {
    axios.get("/api/carted_puzzles").then(response => {
      console.log('here are your carted puzzles');
      this.carted_puzzles = response.data;
      console.log(response.data);
    });
  },

  // var getPuzzleInfo = function() {
  //   return 
  // };

  methods: {
    
    // cartInfo: function(CartedPuzzle) {
    //   this.currentCartedPuzzle = CartedPuzzle;
    // },

    orderPuzzle: function(carted_puzzle) {     
      var params = {
        puzzle_id: carted_puzzle.puzzle.id
      };
      console.log('trying to order');
      // console.log(carted_puzzle);
      console.log(carted_puzzle.puzzle.id)
      axios.post("/api/orders", params).then(response => {
        console.log('puzzle order complete');
        console.log(response.data);
        this.$router.push('/orders');
      });
    },
 
    removeFromCart: function(carted_puzzle) {      
      console.log('trying to remove');
      console.log(carted_puzzle);
      axios.delete("/api/carted_puzzles/" + carted_puzzle.id).then(response => {
        console.log('puzzle removed from cart');
        console.log(response.data);
      });
    },
    // addToCart: function() {
    //   var params = {
    //     puzzle_id: this.puzzle.id,
    //     status: "carted"
    //   };
    //   console.log('puzzle added to cart');
    //   axios.post("/api/carted_puzzles", params).then(response => {
    //     console.log(response.data);
    //     this.$router.push('/carted_puzzles');
    //   });

    // emptyCart: function() {
    //   axios.get("/api/carted_puzzles").then(response => {
    //     if (response.data === 'true') {
    //       console.log('NO PUZZLES');
    //     }
    //   });
    // }
  }
};
</script>


