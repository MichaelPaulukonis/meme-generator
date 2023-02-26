<template lang="pug">
.text-center
  v-menu(:close-on-content-click="false")
    template(v-slot:activator="{ props: menu }")
      v-tooltip(location="top")
        template(v-slot:activator="{ props: tooltip }")
          v-btn(
            :color="colorChoice"
            v-bind="mergeProps(menu, tooltip)"
          )
        span Select {{ text }} color
    v-color-picker(
      v-model="colorChoice"
      hide-inputs
      show-swatches
      @update:model-value="onInput"
    )
</template>

<script>
import { mergeProps } from 'vue'

export default {
    name: "ColorPicker",

    props: {
        modelValue: {
            type: String,
            default: '#000000'
        },
        text: {
            type: String,
            default: ''
        },
    },
    
    emits: ['update:modelValue'],

    data() {
        return {
            colorChoice: this.modelValue,
            show: false,
        }
    },

    directives: {
    },

    computed: {
    },

    methods: {
        mergeProps,
        onInput() {
            this.$emit('update:modelValue', this.colorChoice)
        }
    }
}

</script>