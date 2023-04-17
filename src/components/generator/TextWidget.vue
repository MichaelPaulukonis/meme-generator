<template lang="pug">
v-container
  v-row(no-gutters)
    v-col(md="8")
      v-text-field(
        label="Text"
        prepend-icon="mdi-delete"
        @click:prepend="remove"
        )
    v-col(md="4")
      v-row(no-gutters)
        //- sizes are different because of the text (which isn't visible anyway)
        ColorPicker(v-model="color.text" @update:model-value="" text="text")
        ColorPicker(v-model="color.outline" @update:model-value="" text="outline")

        v-icon(right aria-label="Settings" @click="settingsVisible = !settingsVisible") mdi-cog-box

  v-container(v-show="settingsVisible")
    v-row(no-gutters)
      v-col(md="4")
        v-select(
          label="Font: "
          :items="fonts"
        )

      v-col(md="4")
        v-text-field(
          type="number"
          label="size"
          v-model="size"
          min="4"
        )
      v-col(md="4")
        v-select(
          label="Weight"
          v-model="weight"
          :items="weights"
        )

    v-row(no-gutters)
      v-col(md="4")
        v-text-field(
          type="number"
          label="Shadow Width"
          v-model="shadow"
          min="0"
          max="100"
          )
      v-col(md="4")
        v-select(
          label="Text align"
          :items="['left','center','right']"
          v-model="align"
        )
    v-row(no-gutters)
      v-col(md="4")
        v-text-field(
          type="number"
          label="horizonal offset"
          v-model="hOffset"
          min="0"
        )
      v-col(md="4")
        v-text-field(
          type="number"
          label="vertical offset"
          v-model="vOffset"
          min="0"
        )
    v-container
      v-row
        v-col(md="4")
          v-row.justify-center
            v-btn
              v-icon mdi-chevron-up
          v-row.justify-center
            v-btn
              v-icon mdi-chevron-left
            v-btn
              v-icon mdi-chevron-right
          v-row.justify-center
            v-btn
              v-icon mdi-chevron-down
        v-col(md=4)
          v-checkbox(label="ALL CAPS" v-model="allCaps") 
</template>        

<script>
import ColorPicker from '@/components/ColorPicker.vue'
import { webFonts, googleFonts } from '@/helpers/widgetFonts.js'

const weights = ['normal', 'bold']

export default {
  name: "TextControl",

  components: {
    ColorPicker,
  },

  props: {
    index: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: {}
    }
  },

  // emits: ['update:modelValue'],

  data() {
    return {
      settingsVisible: this.options.settingsVisible,
      color: {
        text: this.options.color.text,
        outline: this.options.color.outline,
        shadow: this.options.color.shadow
      },
      allCaps: this.options.allCaps,
      fonts: [...webFonts, ...googleFonts],
      weights,
      text: this.options.text,
      size: this.options.size,
      weight: this.options.weight,
      shadow: this.options.shadow,
      align: this.options.align,
      hOffset: this.options.hOffset,
      vOffset: this.options.vOffset
    }
  },

  directives: {
  },

  computed: {
  },

  methods: {
    remove() {
      this.$emit("remove", this.options.id)
    }
  }
}

</script>