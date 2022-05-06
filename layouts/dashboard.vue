<template>
  <div class="dashboard-layout">
    <div class="dashboard-sidebar" ref="sidebar">
      <dashboard-layout-sidebar></dashboard-layout-sidebar>
    </div>

    <div class="dashboard-wrapper" :style="`margin-left:${sideWidth}px`">
      <div class="dashboard-navbar" ref="navbar">
        <dashboard-layout-navbar></dashboard-layout-navbar>
      </div>

      <main class="dashboard-body" :style="`margin-top:${navHeight}px`">
        <nuxt></nuxt>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navHeight: 0,
      sideWidth: 0,
    };
  },

  mounted() {
    this.navHeight = this.$refs.navbar.clientHeight;
    this.sideWidth = this.$refs.sidebar.offsetWidth;
  },
};
</script>

<style lang="scss" scoped>
.dashboard-layout {
  position: relative;
  display: flex;
  .dashboard-wrapper {
    .dashboard-navbar {
      position: fixed;
      width: 100%;
    }
  }
  .dashboard-sidebar {
    width: 280px;
    position: fixed;
    height: 100vh;
    background-color: #eee;
  }
}
</style>
