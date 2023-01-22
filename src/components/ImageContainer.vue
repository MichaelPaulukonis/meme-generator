<template lang="pug">
v-img(
  :src="`${src}_q.jpg`"
  :title="title"
  @click="selected"
  )
//- v-dialog(v-model="open", max-width="900", scrollable, @click:outside="open=false")
//-   template(v-slot:activator="{ on, attrs }")
//-     v-img(
//-       :src="`${src}_q.jpg`"
//-       :title="title"
//-       v-bind="attrs"
//-       v-on="on"
//-       )
  //- v-card
  //-   v-card-title {{ test }}
  //-   v-divider
  //-   meme-generator(
  //-     :src="src",
  //-     :title="title",
  //-     :id="id"
  //-     @cancel="open=false"
  //-     )
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