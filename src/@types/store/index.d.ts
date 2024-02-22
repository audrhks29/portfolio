interface ProjectStoreTypes {
  projectPopupState: boolean;
  selectedProject: ProjectDataType[],
  openProjectPopup: (id: number) => void;
  closeProjectPopup: () => void;
  changeSelectedProject: (id: number) => void;
}

interface MenuStoreTypes {
  popupState: boolean;
  currentMenu: number;
  selectedMenu: MenuTypes[];
  activatedMenu: MenuTypes[];
  menu: MenuTypes[];
  openPopup: () => void;
  closePopup: () => void;
  handleClickMenu: (id: number) => void;
  handleGotoHome: () => void;
  handleDelMenu: (id: number) => void;
}

interface MenuTypes {
  id: number;
  label: string;
  image: string;
  path: string | null;
}