<template>
  <div
    class="domain-card border border-gray-200 p-6 flex items-center justify-between hover:bg-gray-100 transition cursor-pointer rounded-md"
  >
    <h2 class="text-xl text-blue-dark">Google.com</h2>
    <strong class="text-green-500 domain-card-price">50$</strong>
    <button class="domain-card-buy flex items-center text-primary">
      Buy Now
      <unicon class="svg-primary" name="shopping-cart"></unicon>
    </button>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.domain-card {
  box-shadow: 0 0 15px -10px #111;
  overflow: hidden;
  position: relative;
  &-price {
    transform: translateY(0);
    transition: 0.5s;
    position: absolute;
    right: 15px;
  }
  &-buy {
    transform: translateY(100px);
    transition: 0.5s;
    position: absolute;
    right: 15px;
  }
  &:hover {
    .domain-card-price {
      transform: translateY(-100px);
    }
    .domain-card-buy {
      transform: translateY(0);
    }
  }
}
</style>
