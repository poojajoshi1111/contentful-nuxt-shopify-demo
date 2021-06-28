<template>
  <app-container>
    <template #title>{{ blog.heading }}</template>
    <template #breadcrumb>
      <bread-crumb :name="blog.heading" />
    </template>
    <template #main>
      <div class="xl:px-27 px-4">
        <div class="container mx-auto pb-12 prose max-w-none">
          <cms-image :image="image" />
          <div class="flex flex-wrap lg:flex-no-wrap">
            <div class="w-full xl:w-8/12 responsive-video">
              <div class="flex-auto">
                {{ blog.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </app-container>
</template>

<script>
import { pathOr } from 'ramda';

export default {
  async asyncData({ store, params: { slug }, error }) {
    await store.dispatch('blog/fetchBlog', slug);

    const blog = await store.getters['blog/getBlog'](slug);

    if (!blog) {
      return error({ statusCode: 404, message: 'Page not found' });
    }
    return { blog };
  },

  computed: {
    image() {
      return pathOr('', ['image', 'fields', 'file'], this.blog);
    },
  },
};
</script>
