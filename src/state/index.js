import create from 'zustand';

const useStore = create((set, getState) => ({
  isRightContent: false,
  toggleIsRightContent: () => {
    const state = getState()
    set({ isRightContent: !state.isRightContent })
  }
}));

export default useStore;