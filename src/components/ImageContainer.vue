<template lang="pug">
v-img(
  :src="src"
  :title="title"
  @click="selected"
  )
</template>

<script>
import memeGenerator from './Generator.vue'

export default {
  name: "imageContainer",

  components: {
    memeGenerator,
  },

  data() {
    return {
      open: false,
      test: 'Generate Your Meme',
    };
  },

  props: {
    src: String,
    title: String,
    id: Number,
  },

  methods: {
    selected() {
      this.$emit('selected')
    },
    close() {
      console.log('emittted received')
      this.open = false;
    },
  },
};
</script>

<style scoped>
</style>