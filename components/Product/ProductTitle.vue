<template>
  <nuxt-link :to="`/products/${product.handle}`" no-prefetch>
    <h2
      class="w-full leading-normal font-normal text-gray-900 text-base text-lg"
    >
      {{ product.title }}
    </h2>
  </nuxt-link>
</template>

<script>
export default {
  props: { product: { type: Object, default: () => {} } },
};
</script>
