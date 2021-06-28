<template>
  <div class="flex justify-between items-center py-6">
    <div
      class="
        flex
        items-center
        font-sans
        text-base
        font-normal
        text-gray-767
        leading-tight
      "
    >
      <nuxt-link
        to="/"
        class="font-para text-xs leading-normal font-normal text-gray-767 mr-2"
      >
        Home
      </nuxt-link>
      <div class="inline-flex items-center">
        <span class="inline-flex items-center">
          /
          <span
            class="
              inline-block
              font-para
              text-xs
              font-normal
              text-black
              ml-2
              capitalize
            "
          >
            {{ name }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: { name: { type: String, default: '' } } };
</script>
