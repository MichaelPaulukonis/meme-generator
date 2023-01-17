<template lang="pug">
div
  nav-bar
  search-results
</template>

<script>
import navBar from "../components/Navbar.vue";
import searchResults from "../components/Results.vue";

export default {
  name: "ResultsView",

  components: {
    navBar,
    searchResults,
  },
};
</script>
