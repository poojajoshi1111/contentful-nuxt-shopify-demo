<template>
  <p class="text-xs font-normal text-red-700">
    <span class="text-lg font-normal text-gray-800">
      {{ price | currency }}
    </span>
  </p>
</template>

<script>
import { pathOr } from 'ramda';

export default {
  props: { product: { type: Object, default: () => {} } },

  computed: {
    price() {
      return pathOr(
        0,
        ['priceRange', 'maxVariantPrice', 'amount'],
        this.product
      );
    },
  },
};
</script>
