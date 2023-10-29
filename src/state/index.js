import create from 'zustand';

const useStore = create((set, getState) => ({
  isRightContent: false,
  currentMenu: 1,
  selectedMenu: [],
  activatedMenu: [
    { id: 1, label: "Home", image: "../public/images/ico/ui/home.webp", path: null },
  ],
  menu: [
    { id: 1, label: "Home", image: "../public/images/ico/ui/home.webp", path: null },
    { id: 2, label: "About Me", image: "../public/images/ico/ui/html.png", path: "about me" },
    { id: 3, label: "Skill", image: "../public/images/ico/ui/css.png", path: "skill" },
    { id: 4, label: "Project", image: "../public/images/ico/ui/js.png", path: "project" }
  ],

  toggleIsRightContent: () => {
    const state = getState()
    set({ isRightContent: !state.isRightContent })
  },

  handleClickMenu: (id) => {
    set({ currentMenu: id })
    const state = getState();
    const filtered = state.menu.filter(item => item.id == id);
    const newActivatedMenu = [...state.activatedMenu];
    if (!newActivatedMenu.some(item => item.id === id)) {
      newActivatedMenu.push(...filtered);
    }
    set({ selectedMenu: filtered, activatedMenu: newActivatedMenu });
  },

  handleGotoHome: () => {
    set({ currentMenu: 1, selectedMenu: [] })
  },

  handleDelMenu: (id) => {
    const state = getState();
    if (id === 1) {
      return
    }
    else {
      const filtered = state.activatedMenu.filter(item => item.id !== id)
      console.log("filtered");
      console.log(filtered);
      set({ activatedMenu: [...filtered] })
      const lastMenuIndex = filtered.length;
      console.log(lastMenuIndex);
      set({ currentMenu: filtered[lastMenuIndex - 1].id })
      console.log("filtered ID");
      console.log(filtered[lastMenuIndex - 1].id);
    }
  }
}));

export default useStore;