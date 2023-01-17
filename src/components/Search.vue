<template lang="pug">
v-form(
  @submit="handleSubmit"
  @keydown.native.esc="close"
  )
  v-container.search-container
    v-text-field.search-bar(
      autofocus,
      placeholder="Search Your Meme"
      append-icon="mdi-magnify",
      rounded,
      outlined,
      clearable,
      hide-details,
      v-model="text",
      @click:append="handleSubmit"
      )
  results-container(:text="text")
</template>

<script>
import ResultsContainer from './ResultsContainer.vue'

export default {
  name: "searchPage",

  components: {
    ResultsContainer
  },

  data() {
    return {
      text: "",
    };
  },

  methods: {
    handleSubmit(e) {
      // e.preventDefault();
      // if (this.text) {
      //   this.$router.push({ name: "search", query: { text: this.text } });
      // }
    },
  },
};
</script>

<style scoped>
.search-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar {
  max-width: 600px;
}
</style>