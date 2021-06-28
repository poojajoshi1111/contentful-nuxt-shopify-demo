<template>
  <app-container>
    <template #title>Blogs</template>
    <template #breadcrumb>
      <bread-crumb name="Blogs" />
    </template>
    <template #main>
      <div class="container mx-auto pb-12 prose prose-blog max-w-none">
        <div v-if="noBlogs">No blogs created!</div>
        <blog-row v-for="blog in blogs" v-else :key="blog.slug" :blog="blog" />
      </div>
    </template>
  </app-container>
</template>

<script>
import BlogRow from '~/components/Blog/BlogRow';

export default {
  components: {
    blogRow: BlogRow,
  },

  async asyncData({ store }) {
    await store.dispatch('blog/fetchBlogs');
    const blogs = await store.getters['blog/getBlogs'];

    return { blogs };
  },

  computed: {
    noBlogs() {
      return Object.keys(this.blogs).length === 0;
    },
  },
};
</script>
