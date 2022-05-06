<template>
  <div class="sidebar-menu">
    <ul class="groups-list">
      <li class="group-item" v-for="(group, key) in navLinks" :key="key">
        <small>{{ key }}</small>
        <ul class="links-list">
          <li class="link-item" v-for="(link, j) in group" :key="j">
            <a>
              <f-icon :icon="link.icon"></f-icon>
              <span>
                {{ link.text }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: {
        Main: [
          { text: "Home", path: "", icon: "home", role: "" },
          { text: "Employyes", path: "", icon: "home", role: "" },
          { text: "Positions", path: "", icon: "home", role: "" },
          { text: "Test", path: "", icon: "home", role: "" },
        ],
        Customers: [
          { text: "Sales", path: "", icon: "home", role: "" },
          { text: "Products", path: "", icon: "home", role: "" },
          { text: "Customers info", path: "", icon: "home", role: "" },
          { text: "Test", path: "", icon: "home", role: "" },
        ],
        Settings: [
          { text: "Global Settings", path: "", icon: "home", role: "" },
          { text: "Products Settings", path: "", icon: "home", role: "" },
          { text: "Website Settings", path: "", icon: "home", role: "" },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar-menu {
  height: 100%;

  ul {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .groups-list {
    overflow: overlay;
    &::-webkit-scrollbar {
      background-color: transparent;
      position: absolute;
      z-index: -1;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #afafaf;
      opacity: 0.5;
      border-radius: 15px;
    }
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .group-item {
      small {
        font-size: 10px;
      }
      .links-list {
        .link-item {
          padding: 1rem 0.6rem;
          display: flex;
          gap: 1rem;
        }
      }
    }
  }
}
</style>
