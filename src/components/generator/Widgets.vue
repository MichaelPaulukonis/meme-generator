<template lang="pug">
#widgetArea 
  v-btn(color="primary" variant="flat" @click="add")
    v-icon(left) mdi-plus
    | Add

  div(v-for="tw, index in widgets" :key="tw.id")
    TextWidget(
      :options="tw"
      :id="index"
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
      const ti = new textInfo()
      this.widgets = [ti, ...this.widgets]
    },
    remove(id) {
      this.widgets = this.widgets.filter(item => item.id !== id)
    }

  }
}

</script>