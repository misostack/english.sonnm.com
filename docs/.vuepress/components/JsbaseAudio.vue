<template>
  <audio :controls="controls" :autoplay="autoplay">
    <source :src="src" type="audio/mpeg" />
    <source :src="src" type="audio/ogg" />
  </audio>
</template>

<script>
export default {
  props: {
    autoplay: {
      require: false,
      type: Boolean,
      default: false,
    },
    controls: {
      require: false,
      type: Boolean,
      default: true,
    },
    src: {
      require: true,
      type: String,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
