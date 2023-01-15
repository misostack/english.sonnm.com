<template>
  <JsbaseAudio :src="mediaSource"></JsbaseAudio>
</template>

<script>
import constant from "../constant";
import JsbaseAudio from "./JsbaseAudio.vue";

const wordToMediaFile = (word) => {
  return `${word
    .split(" ")
    .map((w) => `${w}`.trim().toLowerCase())
    .join("_")}.mp3`;
};
export default {
  components: {
    JsbaseAudio,
  },
  props: {
    word: {
      require: true,
      type: String,
    },
  },
  computed: {
    mediaSource() {
      const mediaFile = wordToMediaFile(this.word);
      return `${constant.AUDIO_HOST}/${mediaFile}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
