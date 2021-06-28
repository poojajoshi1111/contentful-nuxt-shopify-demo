import { InMemoryCache } from 'apollo-cache-inmemory';

export default function ({ $config }) {
  return {
    httpEndpoint: $config.shopifyGraphqlURL,
    httpLinkOptions: {
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token': $config.shopifyStorefrontToken,
        Accept: 'application/json',
      },
    },
    persist: false,
    cache: new InMemoryCache({}),
  };
}
