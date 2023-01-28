<template lang="pug">
v-container.results
  div
    v-row
      v-col.image(v-for="(item, index) in memes", :key="index", cols="3")
        image-container(
          :src="source(item)",
          :title="item",
          :id="index"
          @selected="selected({title: item, src: source(item)})"
          )

</template>

<script>
import ImageContainer from "./ImageContainer.vue"
import memes from '@/helpers/memeList.js'

export default {
  name: "localResultsContainer",

  components: {
    ImageContainer,
  },

  props: {
    text: {
        type: String,
        default: ''
      }
  },

  data() {
    return {
      memes
    };
  },

  methods: {
    handleBack(e) {
      e.preventDefault();
    },

    source(item) {
      return `/memes/${item}`
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