import create from 'zustand';

const useProjectStore = create((set, getState) => ({
  projectPopupState: false,
  selectedProject: {},

  projectData: [
    {
      id: 1,
      image: "images/projectImage/electCar.png",
      title: "ElectCar",
      type: "personal",
      pageLink: "https://audrhks29.github.io/ElectCar/dist/",
      repoLink: "https://github.com/audrhks29/ElectCar",
      isLogin: false
    },
    {
      id: 2,
      image: "images/projectImage/semoseo.png",
      title: "Semoseo",
      type: "personal",
      pageLink: "https://audrhks29.github.io/Semoseo/dist",
      repoLink: "https://github.com/audrhks29/Semoseo",
      isLogin: true
    },
    {
      id: 3,
      image: "images/projectImage/forment.png",
      title: "Forment",
      type: "personal",
      pageLink: "https://audrhks29.github.io/Forment/dist",
      repoLink: "https://github.com/audrhks29/Forment",
      isLogin: true
    },
    {
      id: 4,
      image: "images/projectImage/mancity.png",
      title: "ManCity",
      type: "personal",
      pageLink: "https://audrhks29.github.io/ManCity/dist/",
      repoLink: "https://github.com/audrhks29/ManCity",
      isLogin: false
    },
    {
      id: 5,
      image: "images/projectImage/megabox.png",
      title: "Megabox",
      type: "personal",
      pageLink: "https://audrhks29.github.io/MegaBox/dist/",
      repoLink: "https://github.com/audrhks29/MegaBox",
      isLogin: false
    },
    {
      id: 6,
      image: "images/projectImage/fsm.png",
      title: "FSM",
      type: "team",
      pageLink: "https://hajinkimm.github.io/TP_FSM/dist/",
      repoLink: "https://github.com/audrhks29/TP_FSM",
      isLogin: false
    },
    {
      id: 7,
      image: "images/projectImage/eztourmobile.png",
      title: "EZtour-Mobile",
      type: "team",
      pageLink: "https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/",
      repoLink: "https://github.com/audrhks29/TP-EZtour_vanillaJS_mobile",
      isLogin: false
    },
    {
      id: 8,
      image: "images/projectImage/eztour.png",
      title: "EZtour",
      type: "team",
      pageLink: "https://audrhks29.github.io/Team-project-VanillaJS/Team-project-VanillaJS/index.html",
      repoLink: "https://github.com/audrhks29/Team-project-VanillaJS",
      isLogin: false
    }
  ],

  openProjectPopup: (id) => {
    const state = getState();
    const filtered = state.projectData.filter(item => item.id === id)
    set({ projectPopupState: true, selectedProject: [...filtered] })
  },

  closeProjectPopup: () => {
    set({ projectPopupState: false, selectedProject: [] })
  },

  changeSelectedProject: (id) => {
    const state = getState();
    const filtered = state.projectData.filter(item => item.id === id)
    set({ selectedProject: [...filtered] })
  }
}));

export default useProjectStore;