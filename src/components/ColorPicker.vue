<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
            <div class="text-center">
                <v-menu offset-y>
                    <template v-slot:activator="{ on: button }">
                        <v-btn :color="colorChoice" dark v-on="{ ...tooltip, ...button }">
                            <!-- {{ text }} -->
                        </v-btn>
                    </template>
                    <v-color-picker value="#7417BE" v-model="colorChoice" hide-canvas hide-inputs show-swatches
                        class="mx-auto" @input="onInput">
                    </v-color-picker>
                </v-menu>
            </div>
        </template>
        <span>{{ text }}</span>
    </v-tooltip>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
    name: "ColorPicker",

    props: {
        value: {
            type: String,
            default: '#000000'
        },
        text: {
            type: String,
            default: 'color picker'
        },
    },

    data() {
        return {
            mask: '!#XXXXXXXX',
            menu: false,
            colorChoice: this.value
        }
    },

    directives: {
        mask
    },

    computed: {
        swatchStyle() {
            const { colorChoice, menu } = this
            return {
                backgroundColor: colorChoice,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out'
            }
        }
    },

    methods: {
        onInput() {
            this.$emit('input', this.colorChoice)
        }
    }
}

</script>