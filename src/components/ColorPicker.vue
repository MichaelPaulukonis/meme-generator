<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
              :color="colorChoice"
              v-bind="mergeProps(menu, tooltip)"
            >
                {{ text }}
            </v-btn>
          </template>
          <span>Select {{ text }} color</span>
        </v-tooltip>
      </template>
      <v-color-picker v-model="colorChoice" hide-inputs show-swatches
                        @update:model-value="onInput"></v-color-picker>
    </v-menu>
  </div>
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
            default: 'color picker'
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
            console.log(`selected: ${this.colorChoice}`)
            this.$emit('update:modelValue', this.colorChoice)
        }
    }
}

</script>