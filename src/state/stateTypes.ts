// index.ts
export type IndexTypes = {
  popupState: boolean;
  currentMenu: number;
  selectedMenu: IndexTypesMenu[];
  activatedMenu: IndexTypesMenu[];
  menu: IndexTypesMenu[];
  openPopup: () => void;
  closePopup: () => void;
  handleClickMenu: (id: number) => void;
  handleGotoHome: () => void;
  handleDelMenu: (id: number) => void;
}

export type IndexTypesMenu = {
  id: number;
  label: string;
  image: string;
  path: string | null;
}

// project.ts
export type ProjectTypes = {
  projectPopupState: boolean;
  selectedProject: ProjectDataType[],
  projectData: ProjectDataType[];
  openProjectPopup: (id: number) => void;
  closeProjectPopup: () => void;
  changeSelectedProject: (id: number) => void;
}

export type ProjectDataType = {
  id: number;
  image: string;
  title: string;
  type: string;
  pageLink: string;
  repoLink: string;
  isLogin: boolean;
}

// skill.ts
export type SkillTypes = {
  skillData: {
    id: number;
    text: string;
    image: string;
    type: string;
    proficiency: number | string;
    bgColor: string;
  }[]
}

// aboutMe.ts
export type AboutMeTypes = {
  profileData: {
    id: number;
    label: string;
    text: string;
  }[];
  certificateData: {
    id: number;
    acqDate: string;
    type: string;
    publisher: string;
  }[];
}