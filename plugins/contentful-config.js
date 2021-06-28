const contentful = require('contentful');

export default function createClient({ $config }, inject) {
  inject(
    'contentful',
    contentful.createClient({
      space: $config.contentfulSpace,
      accessToken: $config.contentfulAccessToken,
    })
  );
}
