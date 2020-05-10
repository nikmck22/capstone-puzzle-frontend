<template>
  <div id="app">
    <div id="page-wrapper">

    <!-- Header -->
    <div id="header-wrapper">
      <header id="header" class="container">

        <!-- Nav -->
          <nav id="nav">
            <ul>
              <li class="current"><a href="/">Welcome</a></li>
              <li>
                <a href="#">Menu</a>
                <ul>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/logout">Logout</a></li>
                  <li>
                    <a href="#">Phasellus consequat</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Phasellus consequat</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Veroeros feugiat</a></li>
                </ul>
              </li>
              <!-- <li><a href="/left-sidebar.html">Left Sidebar</a></li>
              <li><a href="/right-sidebar.html">Right Sidebar</a></li>
              <li><a href="/no-sidebar.html">No Sidebar</a></li> -->
            </ul>
          </nav>

      </header>
    </div>

      <router-view/>

    <div id="footer-wrapper">
      <footer id="footer" class="container">
        <div class="row">
          <div class="col-3 col-6-medium col-12-small">

            <!-- Links -->
              <section class="widget links">
                <h3>Random Stuff</h3>
                <ul class="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <!-- <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li> -->
                </ul>
              </section>

          </div>
          <div class="col-3 col-6-medium col-12-small">

            <!-- Links -->
              <section class="widget links">
                <h3>Random Stuff</h3>
                <ul class="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <!-- <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li> -->
                </ul>
              </section>

          </div>
          <div class="col-3 col-6-medium col-12-small">

            <!-- Links -->
              <section class="widget links">
                <h3>Random Stuff</h3>
                <ul class="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <!-- <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li> -->
                </ul>
              </section>

          </div>
          <div class="col-3 col-6-medium col-12-small">

            <!-- Contact -->
              <section class="widget contact last">
                <h3>Contact Us</h3>
                <!-- <ul>
                  <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                  <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                  <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                  <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                  <li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>
                </ul> -->
                <p>1234 Fictional Road<br />
                Nashville, TN 00000<br />
                (800) 555-0000</p>
              </section>

          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="copyright">
              <ul class="menu">
                <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

    </div>

  </div>
</template>

<style>

</style>

<script>
export default {
  data: function() {
    return {
      titleFilter: ""
    };
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

    getPuzzleId: function() {
      return parseInt(localStorage.getItem("puzzle_id"));
    },

    addToCart: function() {
      console.log('puzzle has been added to cart')
    }
  }
};

</script>