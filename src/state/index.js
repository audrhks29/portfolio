import create from 'zustand';

const useStore = create((set, getState) => ({
  popupState: false,

  currentMenu: 1,
  selectedMenu: [],
  activatedMenu: [],

  menu: [
    { id: 1, label: "Home", image: "../public/images/ico/ui/home.webp", path: null },
    { id: 2, label: "About Me", image: "../public/images/ico/ui/html.png", path: "about me" },
    { id: 3, label: "Skill", image: "../public/images/ico/ui/css.png", path: "skill" },
    { id: 4, label: "Project", image: "../public/images/ico/ui/js.png", path: "project" }
  ],

  openPopup: () => {
    const state = getState()
    if (!state.popupState) {
      set({
        activatedMenu:
          [
            { id: 1, label: "Home", image: "../public/images/ico/ui/home.webp", path: null }
          ]
      })
      set({ popupState: true, currentMenu: 1 })
    }
  },

  closePopup: () => {
    set({ popupState: false, currentMenu: 0, activatedMenu: [] })
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
    if (state.activatedMenu.length === 1) {
      set({ popupState: false, activatedMenu: [], currentMenu: 0 })
    }
    else {
      const filtered = state.activatedMenu.filter(item => item.id !== id)
      set({ activatedMenu: [...filtered] })
      const lastMenuIndex = filtered.length;
      set({ currentMenu: filtered[lastMenuIndex - 1].id })
    }
  }
}));

export default useStore;