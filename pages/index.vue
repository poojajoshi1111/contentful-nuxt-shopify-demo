<template>
  <app-container>
    <template #title> Product List </template>
    <template #main>
      <div v-if="products.length === 0">No Products</div>
      <div v-else class="flex justify-between">
        <product-tile
          v-for="product of products"
          :key="product.id"
          :product="product.node"
        />
      </div>
    </template>
  </app-container>
</template>

<script>
import ProductTile from '~/components/Product/ProductTile.vue';

export default {
  components: { productTile: ProductTile },

  async asyncData({ app }) {
    const products = await app.$shopify.fetchProducts();

    return { products };
  },
};
</script>
