<template lang="pug">
v-form(
  @submit="handleSearch"
  @keydown.native.esc="closeSearch"
  )
  v-container.Search
    v-text-field.Search(
      autofocus,
      placeholder="Search Flickr"
      append-icon="mdi-magnify",
      prepend-icon="mdi-anvil",
      rounded,
      outlined,
      clearable,
      hide-details,
      v-model="text",
      @click:append="fetchData",
      @click:prepend="closeSearch"
      )

  v-container(v-if="showResults")
    results-container(
      :text="text"
      :photo="photo"
      :total="total"
      :page="page"
      @next="fetchData"
      @selected="selected"
      )
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
      text: '',
      searchValue: '',
      showResults: false,
      busy: false,
      page: 0,
      photo: [],
      total: 0,
    };
  },

  methods: {
    closeSearch() {
      this.$emit('closeSearch')
    },

    selected(e) {
      console.log(e)
      this.$emit('selected', e)
    },

    handleSearch(e) {
      e.preventDefault()
      this.init()
      this.fetchData()
    },

    init() {
      this.busy = false;
      this.page = 0;
      this.photo = [];
      this.total = 0;
    },

    fetchData() {
      if (this.busy) return
      this.busy = true;
      const url =
        "https://www.flickr.com/services/rest/?" +
        new URLSearchParams({
          method: "flickr.photos.search",
          api_key: "b235d15e6d03a052c424e6d5f652e217",
          text: this.text,
          sort: "relevance",
          page: this.page,
          format: "json",
          nojsoncallback: 1,
        });

      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.photo = [...this.photo, ...data.photos.photo];
          this.page += 1;
          this.total = data.photos.total;
          this.busy = false;
          this.showResults = true
        })
        .catch((error) => {
          console.log(error)
        });
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