import create from 'zustand';

import projectList from '../assets/project.json'

const useProjectStore = create<ProjectStoreTypes>((set) => ({
  projectPopupState: false,
  selectedProject: [],

  openProjectPopup: (id) => {
    const filtered = projectList.filter(item => item.id === id)
    set({ projectPopupState: true, selectedProject: [...filtered] })
  },

  closeProjectPopup: () => {
    set({ projectPopupState: false, selectedProject: [] })
  },

  changeSelectedProject: (id) => {
    const filtered = projectList.filter(item => item.id === id)
    set({ selectedProject: [...filtered] })
  }
}));

export default useProjectStore;