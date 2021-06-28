<template>
  <button
    class="
      pr-10
      pl-10
      transition-colors
      duration-500
      ease-in-out
      leading-5
      text-xs text-center
      py-3
      uppercase
      text-white
      bg-black
      hover:bg-gray-700
      font-bold
      w-full
      inline-block
    "
  >
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: { label: { type: String, required: true } },
};
</script>
