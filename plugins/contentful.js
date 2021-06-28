import { pathOr } from 'ramda';

export default ({ app }, inject) => {
  // create an object of util functions
  const cms = {
    client: app.$contentful,
    async fetchBlogs() {
      const response = await this.client.getEntries({
        content_type: 'page',
        order: '-sys.createdAt',
      });
      const items = pathOr([], ['items'], response);

      let blogs = {};
      for (let item of items) {
        blogs[item.fields.slug] = item.fields;
      }
      return blogs; // {'contact-us': {...}, 'about-us': {...}}
    },
    async fetchBlog(slug) {
      const page = await this.client.getEntries({
        content_type: 'page',
        'fields.slug': slug,
      });
      let pageData = pathOr(null, ['items', [0], 'fields'], page);
      return { [slug]: pageData }; // {'contact-us': {...}}
    },
  };

  inject('cms', cms);
};
