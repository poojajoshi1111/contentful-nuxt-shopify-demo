<template>
  <img
    v-if="image.src"
    :src="image.src"
    :alt="image.altText"
    :width="image.width"
    :height="image.height"
    loading="lazy"
  />
</template>

<script>
export default {
  props: { image: { type: Object, default: () => {} } },
};
</script>
