<template>
  <img
    :width="image.details.image.width"
    :height="image.details.image.height"
    loading="lazy"
    :src="image.url"
    :alt="image.fileName"
    class="w-full"
  />
</template>

<script>
export default {
  props: { image: { type: Object, required: true } },
};
</script>
