<template>
  <img :src="mediaSource" :alt="word" height="450" />
</template>

<script>
import constant from "../constant";

const wordToMediaFile = (word) => {
  return `${word
    .split(" ")
    .map((w) => `${w}`.trim().toLowerCase())
    .join("_")}.png`;
};
export default {
  props: {
    word: {
      require: true,
      type: String,
    },
  },
  computed: {
    mediaSource() {
      const mediaFile = wordToMediaFile(this.word);
      return `${constant.IMAGE_HOST}/${mediaFile}`;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  margin: 1rem auto;
}
</style>
