<template>
  <div id="main-wrapper">
    <div class="container">
      <div id="content">
        <article>
          <h2>Welcome, {{user.name}}!</h2>
          <p>Email: {{user.email}}</p>
          <p>Mailing Address: {{user.address}}</p>
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
      user: {}
    };
  },
  created: function() {
    axios.get(`/api/users/${this.user.id}`).then(response => {
      console.log('here is the current user');
      this.user = response.data;
      console.log(response.data);
      // localStorage.getItem("email", response.data.email);
      // console.log(response.data);
    });
  },
  methods: {}
};
</script>