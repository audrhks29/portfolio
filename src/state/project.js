import create from 'zustand';

const useProjectStore = create((set) => ({
  projectData: [
    { id: 1, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
    { id: 2, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
    { id: 3, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
    { id: 4, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
    { id: 5, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
    { id: 6, image: "../public/images/projectImage/electCar.png", title: "ElectCar", type: "personal", link: "" },
  ]
}));

export default useProjectStore;