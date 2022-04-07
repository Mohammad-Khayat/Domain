<template>
  <section>
    <div class="flex items-center w-100 justify-center">
      <h2 class="text-4xl text-blue-dark">Trending Domains</h2>
      <img src="@/assets/icons/home/trend.png" class="h-16 mx-2" />
    </div>
    <div class="trending-domains">
      <div class="container m-auto">
        <div class="grid grid-cols-4 gap-4 mt-4">
          <div class="col">
            <domain-card></domain-card>
          </div>
          <div class="col">
            <domain-card></domain-card>
          </div>
          <div class="col">
            <domain-card></domain-card>
          </div>
          <div class="col">
            <domain-card></domain-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
