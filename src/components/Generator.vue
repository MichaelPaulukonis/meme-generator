<template lang="pug">
v-card-title {{ title }}
  v-container(
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
    )
    v-row
      v-col.dialog(xs="12" md="6")
        canvas(:id="`cvs_${id}`")
          | Get a real browser!
          br
          a(href="http://www.google.com/chrome") Google Chrome to the rescue!

      v-col.dialog.actions(xs="12", md="6")
        v-card-text.buttons
          v-text-field(label="Enter the above text here", outlined, clearable, hide-details, v-model="aboveText" v-on:change="draw")
          v-text-field(label="Enter the below text here", outlined, clearable, hide-details, v-model="belowText" v-on:change="draw")

          //- v-col.pr-4
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

          v-btn(color="primary" variant="flat" @click="close") Cancel

          v-btn(color="secondary" variant="flat" @click="search") Search

</template>

<script>
import download from "downloadjs";
import fontList from '../helpers/fontList'
import ColorPicker from './ColorPicker.vue'

// TODO: I don't understand this! (Havent taken the time to)
const fragmentText = (ctx, text, maxWidth) => {
  var words = text.split(' '),
    lines = [],
    line = "";
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
      title: ''
    };
  },

  props: {
    src: String,
    id: String,
  },

  components: {
    ColorPicker
  },

  mounted() {
    this.init()
    this.$nextTick(this.loaded)
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
          // Notifier.error('Not an image!', 'you may only drop images to the page');
          e.preventDefault();
          return false;
        }
        this.title = file.name
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ev) => {
          this.img.src = ev.target.result
        };
      }
      e.preventDefault()
      return false
    },
    search() {
      this.$emit('search')
    },
    exportImage() {
      const canvas = () => document.getElementById(`cvs_${this.id}`)
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
    close() {
      this.$emit('cancel')
    },

    draw() {
      const canvas = () => document.getElementById(`cvs_${this.id}`)
      if (!canvas()) return
      let ctx = canvas().getContext('2d')
      ctx.drawImage(this.img, 0, 0)

      // TODO: larger limit
      // also a minimum size, plz
      const maxh = 640
      const maxw = 450
      const minh = 400
      const minw = 300

      let height = this.img.height
      let width = this.img.width

      while (height > maxh || width > maxw) {
        --height;
        --width;
      }

      while (height < minh || width < minw) {
        ++height;
        ++width;
      }

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

</style>