<template lang="pug">
#widgetArea 
  v-btn(color="primary" variant="flat" @click="add")
    v-icon(left) mdi-plus
    | Add

  div(v-for="w, index in widgets" :key="w.id")
    TextWidget(
      :options="w"
      :index="index"
      @remove="remove"
      )
</template>

<script>
import TextWidget from './TextWidget.vue'
import textInfo from './textInfo'

export default {
  name: "TextWidgets",

  components: { TextWidget },

  data() {
    return {
      widgets: []
    }
  },

  computed: {},

  methods: {
    add() {
      // TODO: need to figure out default location when created
      // index may change, so ..... ugh
      const ti = new textInfo()
      this.widgets = [ti, ...this.widgets]
    },
    remove(id) {
      this.widgets = this.widgets.filter(item => item.id !== id)
    }

  }
}

</script>