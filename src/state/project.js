import create from 'zustand';

const useProjectStore = create((set) => ({
  projectData: [
    {
      id: 1,
      image: "../public/images/projectImage/electCar.png",
      title: "ElectCar",
      type: "personal",
      pageLink: "https://audrhks29.github.io/ElectCar/dist/",
      repoLink: "https://github.com/audrhks29/ElectCar"
    },
    {
      id: 2,
      image: "../public/images/projectImage/semoseo.png",
      title: "Semoseo",
      type: "personal",
      pageLink: "https://audrhks29.github.io/Semoseo/dist",
      repoLink: "https://github.com/audrhks29/Semoseo"
    },
    {
      id: 3,
      image: "../public/images/projectImage/forment.png",
      title: "Forment",
      type: "personal",
      pageLink: "https://audrhks29.github.io/Forment/dist",
      repoLink: "https://github.com/audrhks29/Forment"
    },
    {
      id: 4,
      image: "../public/images/projectImage/mancity.png",
      title: "ManCity",
      type: "personal",
      pageLink: "https://audrhks29.github.io/ManCity/dist/",
      repoLink: "https://github.com/audrhks29/ManCity"
    },
    {
      id: 5,
      image: "../public/images/projectImage/megabox.png",
      title: "Megabox",
      type: "personal",
      pageLink: "https://audrhks29.github.io/MegaBox/dist/",
      repoLink: "https://github.com/audrhks29/MegaBox"
    },
    {
      id: 6,
      image: "../public/images/projectImage/fsm.png",
      title: "FSM",
      type: "team",
      pageLink: "https://hajinkimm.github.io/TP_FSM/dist/",
      repoLink: "https://github.com/audrhks29/TP_FSM"
    },
    {
      id: 7,
      image: "../public/images/projectImage/eztourmobile.png",
      title: "EZtour-Mobile",
      type: "team",
      pageLink: "https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/",
      repoLink: "https://github.com/audrhks29/TP-EZtour_vanillaJS_mobile"
    },
    {
      id: 8,
      image: "../public/images/projectImage/eztour.png",
      title: "EZtour",
      type: "team",
      pageLink: "https://audrhks29.github.io/Team-project-VanillaJS/Team-project-VanillaJS/index.html",
      repoLink: "https://github.com/audrhks29/Team-project-VanillaJS"
    }
  ]
}));

export default useProjectStore;