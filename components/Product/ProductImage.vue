<template>
  <nuxt-link
    :to="`/products/${product.handle}`"
    no-prefetch
    class="flex justify-center"
  >
    <shopify-image :image="image" />
  </nuxt-link>
</template>

<script>
import { evolve, pathOr } from 'ramda';

export default {
  props: { product: { type: Object, default: () => {} } },

  computed: {
    image() {
      let image = pathOr({}, ['images', 'edges', [0], 'node'], this.product);

      image = evolve({
        src: () => image.w_300_h_300,
        alt: () => image.altText,
      })(image);

      return image;
    },
  },
};
</script>
