<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <ui-avatar></ui-avatar>
      <div class="user-info">
        <h6 class="user-name">User Name</h6>
        <h6 class="user-position">User Position</h6>
      </div>
    </div>
    <div class="sidebar-body">
      <dashboard-layout-sidebar-menu></dashboard-layout-sidebar-menu>
    </div>
    <div class="sidebar-footer">footer</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  &-header {
    padding: 3rem 1rem;
    display: flex;
    align-items: center;
    min-height: 10%;
    .user-info {
      margin-left: 0.8rem;
      .user-name {
        font-size: 16px;
      }
      .user-position {
        font-size: 12px;
      }
    }
  }
  &-body {
    padding: 1rem;
    max-height: 80%;
  }
  &-footer {
    min-height: 10%;
  }
}
</style>
