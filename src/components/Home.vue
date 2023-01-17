<template lang="pug">
#home
  #search(v-if="searchVisible")
    search-container(
      @closeSearch="closeSearch"
      @selected="selected"
    )

  v-card(v-show="!searchVisible")
    meme-generator(
      :src="src",
      :title="title",
      :id="id"
      @cancel="open=false"
      @search="toggleSearch"
      )
</template>

<script>
import MemeGenerator from './Generator.vue'
import SearchContainer from './SearchContainer.vue'


export default {
  name: "homePage",

  components: {
    MemeGenerator,
    SearchContainer
  },

  data() {
    return {
      text: "",
      src: "https://live.staticflickr.com/3052/2937479216_ab63558e41",
      title: 'title',
      id: "1",
      searchVisible: false
    };
  },

  methods: {
    search() {
      this.searchVisible = true
    },
    closeSearch() {
      this.searchVisible = false
    },
    toggleSearch() {
      this.searchVisible = !this.searchVisible
    },

    selected(item) {
      this.src = item.src
      this.title = item.title
      this.searchVisible = false
      this.id = item.id
    },

    handleSearch(e) {
      e.preventDefault();
      if (this.text) {
        this.$router.push({ name: "search", query: { text: this.text } });
      }
    },
  },
};
</script>

<style scoped>
.Home {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Search {
  max-width: 600px;
}
</style>