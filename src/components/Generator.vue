<template lang="pug">
#generator
  v-card-title {{ title }}
  v-container(
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
    )
    v-row
      v-col.dialog.md-8
        #canvasPlaceholder
          canvas(:id="`cvs_${id}`")
            | Get a real browser!
            br
            a(href="http://www.google.com/chrome") Google Chrome to the rescue!
          #instructions.text-center.px-3.d-flex.justify-content-center.align-items-center.text-muted
            .fs-lg Drag &amp; Drop an image or use any of the alternative upload methods to generate your meme.
              br
              | The images are processed without being stored on any server.

      v-col.dialog.actions.md-4
        v-card-text.buttons
          v-text-field(label="Enter the above text here", outlined, clearable, hide-details, v-model="aboveText" v-on:change="draw")
          v-text-field(label="Enter the below text here", outlined, clearable, hide-details, v-model="belowText" v-on:change="draw")

          v-select(
            :items="fontList"
            v-model="activeFont"
            :style="{ 'font-family': activeFont }"
            filled
            dense
            label="font picker"
            @update:model-value="draw"
          )
            template(#item="{ props }")
              v-list-item(v-bind="props" :style="{'font-family': props.value}")

          v-col.pr-4 
            v-row
              ColorPicker(v-model="color1" @update:model-value="draw" text="text")
              ColorPicker(v-model="outlineColor" @update:model-value="draw" text="outline")

          Widgets()

          v-col.pr-4 
            v-slider(
              v-model="padY"
              :max="80"
              :min="4"
              :step="1"
              hide-details
              thumb-label
              @update:model-value="draw"
              label="pad Y"
            )
              template(v-slot:append)
                v-text-field.mt-0.pt-0(
                  v-model="padY"
                  hide-details
                  single-line
                  thumb-label
                  type="number"
                  v-on:change="draw"
                  )

          v-col.pr-4
            v-slider(
              v-model="padX"
              label="pad X"
              :max="80"
              :min="4"
              :step="1"
              hide-details
              thumb-label
              @update:model-value="draw"
            )
              template(v-slot:append)
                v-text-field.mt-0.pt-0(
                  v-model="padX"
                  hide-details
                  single-line
                  type="number"
                  v-on:change="draw"
                  )

          v-col.pr-4 
            v-slider(
              v-model="fontSize"
              :max="200"
              :min="8"
              :step="1"
              hide-details
              thumb-label
              @update:model-value="draw"
              label="text size"
            )
              template(v-slot:append)
                v-text-field.mt-0.pt-0(
                  v-model="fontSize"
                  hide-details
                  single-line
                  type="number"
                  v-on:change="draw"
                  )

          v-col.pr-4
            v-slider(
              v-model="outlineSize"
              label="outline size"
              :max="40"
              :min="0"
              :step="1"
              hide-details
              thumb-label
              @update:model-value="draw"
            )
              template(v-slot:append)
                v-text-field.mt-0.pt-0(
                  v-model="outlineSize"
                  hide-details
                  single-line
                  type="number"
                  v-on:change="draw"
                  )

        v-card-actions
          v-spacer
          v-btn(color="primary" variant="flat" @click="exportImage")
            v-icon(left) mdi-download
            | Export

          v-btn(color="secondary" variant="flat" @click="search")
            v-icon(left) mdi-magnify
            | Search

</template>

<script>
import download from "downloadjs";
import fontList from '../helpers/fontList'
import ColorPicker from './ColorPicker.vue'
import TextWidget from './generator/TextWidget.vue'
import Widgets from './generator/Widgets.vue'

let canvas = null // defined when loaded 

// TODO: I don't understand this! (Havent taken the time to)
const fragmentText = (ctx, text, maxWidth) => {
  const words = text.split(' ')
  let lines = []
  let line = ""
  if (ctx.measureText(text).width < maxWidth) {
    return [text];
  }
  while (words.length > 0) {
    while (ctx.measureText(words[0]).width >= maxWidth) {
      var tmp = words[0];
      words[0] = tmp.slice(0, -1);
      if (words.length > 1) {
        words[1] = tmp.slice(-1) + words[1];
      } else {
        words.push(tmp.slice(-1));
      }
    }
    if (ctx.measureText(line + words[0]).width < maxWidth) {
      line += words.shift() + " ";
    } else {
      lines.push(line);
      line = "";
    }
    if (words.length === 0) {
      lines.push(line);
    }
  }
  return lines;
}

const MAX_WIDTH = 800;
const MAX_HEIGHT = 600;
const MIN_WIDTH = 400;
const MIN_HEIGHT = 400;

const getCanvasSize = (img) => {
  let width = img.width;
  let height = img.height;

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
    else if (width < MIN_WIDTH) {
      height *= MIN_HEIGHT / width
      width = MIN_WIDTH
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
    else if (height < MIN_HEIGHT) {
      width *= MIN_HEIGHT / height;
      height = MIN_HEIGHT;
    }
  }
  return { width, height }
}

// WIP
// see https://github.com/georapbox/meme-generator
const defaultTextOptions = {
  _isSettingsOpen: false,
  text: '',
  fillColor: '#ffffff',
  shadowColor: '#000000',
  font: 'Anton',
  fontSize: 40,
  fontWeight: 'normal',
  textAlign: 'center',
  shadowBlur: 3,
  offsetY: 0,
  offsetX: 0,
  allCaps: true
};

export default {
  name: "GeneratorCore",

  data() {
    return {
      open: false,
      aboveText: "First line",
      belowText: "Second line",
      img: new Image(),
      fontSize: 48,
      activeFont: 'Impact',
      color1: '#FFFFFF',
      outlineColor: '#000000',
      outlineSize: 1,
      padX: 4,
      padY: 4,
      ctx: null,
      fontList: fontList,
      title: '',
      textOptions: [{ ...defaultTextOptions }]
    }
  },

  props: {
    src: String,
    id: String,
  },

  components: {
    ColorPicker,
    TextWidget,
    Widgets
  },

  mounted() {
    this.init()
    this.$nextTick(this.loaded)
    canvas = () => document.getElementById(`cvs_${this.id}`)
  },

  methods: {
    loaded() {
      this.img.onload = () => this.draw()
      this.img.crossOrigin = 'anonymous'
      this.img.src = `${this.src}`
    },
    onDrop(e) {
      const data = e.dataTransfer || e.originalEvent.dataTransfer;
      if (data.files.length !== 1) {
        // Notifier.error('Too many files!', 'you may only drop one image at a time to the page');
      }
      else {
        const file = data.files[0];
        if (file.type.indexOf('image') === -1) {
          // TODO: bring this back! It's a good thing to have.
          // Notifier.error('Not an image!', 'you may only drop images to the page');
        } else {
          this.title = file.name
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (ev) => {
            this.img.src = ev.target.result
          }
        }
      }
      e.preventDefault()
      return false
    },
    search() {
      this.$emit('search')
    },
    exportImage() {
      var dataURL = canvas().toDataURL("image/png");
      download(
        dataURL,
        `${this.title}_${this.aboveText}_${this.belowText}.png`
      );
    },
    init() {
      this.aboveText = "First line"
      this.belowText = "Second line"
    },

    draw() {
      if (!canvas()) return
      let ctx = canvas().getContext('2d')
      const {width, height } = getCanvasSize(this.img)

      canvas().height = height;
      canvas().width = width;
      ctx.save();
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(this.img, 0, 0, width, height);

      ctx.font = "bold " + this.fontSize + "px " + this.activeFont;
      ctx.textAlign = "center";
      ctx.fillStyle = this.color1;

      const top_lines = fragmentText(ctx, this.aboveText, width - this.fontSize - this.padX);
      const bottom_lines = (fragmentText(ctx, this.belowText, width - this.fontSize - this.padX)).reverse(); // reverse it for bottom up!

      top_lines.forEach((line, i) => {
        ctx.fillText(line, width / 2, this.padY + ((i + 1) * this.fontSize));
      });
      bottom_lines.forEach((line, i) => {
        // bottom pad is different than top. 10 aandd 1.75 make it a bit better, but doesn't scale w/ top line. Better, though
        ctx.fillText(line, width / 2, height - (10 + this.padY * 1.75 + (i * this.fontSize)));
      });

      if (this.outlineSize > 0) {
        ctx.strokeStyle = this.outlineColor;
        ctx.lineWidth = this.outlineSize

        top_lines.forEach((line, i) => {
          ctx.strokeText(line, width / 2, this.padY + ((i + 1) * this.fontSize));
        });
        bottom_lines.forEach((line, i) => {
          ctx.strokeText(line, width / 2, height - (10 + this.padY * 1.75 + (i * this.fontSize)));
        });
      }

      ctx.restore();
    },
  },
  watch: {
    aboveText() {
      this.draw()
    },
    belowText() {
      this.draw()
    },
    src() {
      this.loaded()
    }
  }
};
</script>

<style scoped>
#canvasPlaceholder {
  padding: 0.25rem;
  border: 2px dashed #c0c0c0;
}

#instructions {
  min-height: 200px;
  height: 100%;
}
</style>