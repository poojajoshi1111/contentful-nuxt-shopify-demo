<template>
  <app-container v-if="product.title">
    <template #title> Product </template>
    <template #breadcrumb><bread-crumb :name="product.title" /></template>
    <template #main>
      <div class="flex">
        <div class="w-2/3">
          <div
            class="bg-white justify-center flex items-center"
            style="min-height: 765px"
          >
            <shopify-image :image="image" />
          </div>
          <div v-if="product.descriptionHtml" class="max-w-none mb-12 px-0">
            {{ product.descriptionHtml }}
          </div>
        </div>
        <div class="w-1/3 ml-10">
          <div class="mb-6 px-0">
            <div class="flex items-center justify-between mt-0 mb-10">
              <sale-banner v-if="product.availableForSale" />
              <div>{{ product.vendor }}</div>
            </div>
            <h1 class="text-4xl text-black font-normal leading-10 mt-0 mb-6">
              {{ product.title }}
            </h1>
            <p>{{ product.description }}</p>
            <div class="flex items-center mb-6">
              <span class="text-3xl mr-4 font-normal text-campaign-sale">
                {{ price | currency }}
              </span>
            </div>
            <div class="flex justify-between items-center mb-6 lg:px-0 px-5">
              <app-button label="add to bag" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-container>
</template>

<script>
import { pathOr, evolve } from 'ramda';

import SaleBanner from '~/components/ProductDetail/SaleBanner.vue';

export default {
  components: { saleBanner: SaleBanner },

  async asyncData({ app, params: { handle }, error }) {
    const product = await app.$shopify.fetchProduct(handle);

    if (!product.title) {
      return error({ statusCode: 404, message: 'Page not found!' });
    }

    return { product };
  },

  computed: {
    image() {
      let image = pathOr('', ['images', 'edges', [0], 'node'], this.product);
      return evolve({
        src: () => image.w_1024_h_767,
        alt: () => image.altText,
      })(image);
    },

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
