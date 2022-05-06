<template>
  <img
    :src="src"
    alt=""
    class="component_avatar"
    :class="{ props_rounded: rounded }"
    :style="{ height: size + 'px', width: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: require("@/assets/images/placeholders/alexander.jpg"),
    },
    size: {
      type: String,
      default: "50",
    },
    rounded: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.component_avatar {
  object-fit: cover;
  background-color: palevioletred;
}

.props_rounded {
  border-radius: 50%;
}
</style>
