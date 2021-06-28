<template>
  <div class="flex border-b border-gray-300 pb-4 mb-4">
    <div class="w-1/2 mb-4 mb-0 mr-10">
      <cms-image :image="image" class="rounded-md" />
    </div>
    <div class="flex-1">
      <div class="max-w-none">
        <nuxt-link :to="`/blogs/${blog.slug}`">
          <h2 class="mb-4 text-lg">{{ blog.heading }}</h2>
        </nuxt-link>
        <p class="five-line-clamp">{{ blog.content }}</p>
      </div>
      <div class="w-full mt-6">
        <nuxt-link
          :to="`/blogs/${blog.slug}`"
          class="
            transition-colors
            duration-500
            ease-in-out
            leading-5
            text-xs text-center
            py-3
            uppercase
            text-white
            bg-gray-500
            hover:bg-gray-700
            px-3
            font-bold
            w-full
            md:w-auto
            inline-block
          "
        >
          Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { pathOr } from 'ramda';

export default {
  props: { blog: { type: Object, default: () => {} } },

  computed: {
    image() {
      return pathOr('', ['image', 'fields', 'file'], this.blog);
    },
  },
};
</script>
