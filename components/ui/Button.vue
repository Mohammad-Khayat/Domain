<template>
  <button
    class="bg-blue-light flex items-center text-white my-1 rounded-lg w-max p-2 m-auto focus:shadow-lg"
  >
    <slot> Find Your Domain </slot>
    <slot name="icon">
      <unicon v-if="icon" :name="icon" class="mx-1" fill="#fff"></unicon>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style></style>
