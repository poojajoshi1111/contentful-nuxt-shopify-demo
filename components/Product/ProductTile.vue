<template>
  <div class="border w-72">
    <product-image :product="product" />
    <product-sale-banner v-if="product.availableForSale" />
    <div class="px-2">
      <product-title :product="product" />
      <product-price :product="product" />
    </div>
  </div>
</template>

<script>
import ProductSaleBanner from '~/components/Product/ProductSaleBanner';
import ProductImage from '~/components/Product/ProductImage';
import ProductTitle from '~/components/Product/ProductTitle';
import ProductPrice from '~/components/Product/ProductPrice.vue';

export default {
  components: {
    productSaleBanner: ProductSaleBanner,
    productImage: ProductImage,
    productTitle: ProductTitle,
    productPrice: ProductPrice,
  },
  props: { product: { type: Object, default: () => {} } },
};
</script>
