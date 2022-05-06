<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <idomain-footer></idomain-footer>
  </div>
</template>

<script>
import IdomainFooter from "~/components/IdomainFooter.vue";
import Navbar from "~/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
