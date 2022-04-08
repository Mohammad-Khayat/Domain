export const state = () => ({
  navbarStatus: 0,
});

export const mutations = {
  Set_Navbar_Status(state) {
    state.navbarStatus = window.scrollY >= window.innerHeight / 4 ? 1 : 0;
  },
};
