<template lang="pug">
v-container.results
  p
    v-btn(text, icon, @click="handleBack")
      v-icon mdi-arrow-left
    | {{ total.toLocaleString() }} Results for "{{ text }}" - page {{ page }}

  div(v-infinite-scroll="fetchData", infinite-scroll-disabled="busy")
    v-row
      v-col.image(v-for="(item, index) in photo", :key="index", cols="3")
        image-container(
          :src="source(item)",
          :title="item.title",
          :id="index"
          @selected="selected({...item, src: source(item)})"
          )

    h4 Loading...
</template>

<script>
import ImageContainer from "./ImageContainer.vue"

export default {
  name: "resultsContainer",

  components: {
    ImageContainer,
  },

  props: {
    text: {
        type: String,
        default: ''
      },
    photo: [],
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
  },

  data() {
    return {
      busy: false,
    };
  },

  methods: {
    fetchData() {
      this.$emit('next')
    },

    handleBack(e) {
      e.preventDefault();
    },

    source(item) {
      return `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}`
    },

    selected(e) {
      console.log(e)
      this.$emit('selected', e)
    }
  },
};
</script>

<style>
.results {
  max-width: 900px;
  padding-top: 80px;
}

.image {
  padding: 2px;
  cursor: pointer;
}

.dialog {
  padding: 0px;
}

.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buttons {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
</style>