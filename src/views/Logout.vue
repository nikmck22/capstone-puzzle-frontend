<template>
  <div class="logout">
    <div class="container">
      <h4>You have now been logged out</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    // this.$router.push("/");
  }
};

</script>