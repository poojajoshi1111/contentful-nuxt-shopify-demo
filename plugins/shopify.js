import { pathOr } from 'ramda';
import { Products, ProductByHandle } from '~/gql/queries/shopify.gql';

export default ({ app }, inject) => {
  // create an object of util functions
  const shopify = {
    client: app.apolloProvider.defaultClient,
    async fetchProducts() {
      const response = await this.client.query({ query: Products });
      return pathOr([], ['data', 'products', 'edges'], response); // return array of products
    },
    async fetchProduct(handle) {
      const response = await this.client.query({
        query: ProductByHandle,
        variables: { handle },
      });
      return pathOr({}, ['data', 'productByHandle'], response); // return single product
    },
  };

  inject('shopify', shopify);
};
