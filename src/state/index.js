import create from 'zustand';

const useStore = create((set, getState) => ({
  isRightContent: false,
  currentMenu: 1,
  selectedMenu: [{}],
  menu: [
    { id: 1, label: "About Me", image: "../public/images/ico/js.png", path: "about me" },
    { id: 2, label: "Skill", image: "../public/images/ico/html.png", path: "skill" },
    { id: 3, label: "Project", image: "../public/images/ico/css.png", path: "project" }
  ],
  toggleIsRightContent: () => {
    const state = getState()
    set({ isRightContent: !state.isRightContent })
  },
  handleCurrentMenu: (id) => {
    set({ currentMenu: id })
    const state = getState();
    const filtered = state.menu.filter(item => item.id == id);
    set({ selectedMenu: filtered })
  }
}));

export default useStore;