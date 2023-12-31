import React, { memo, useEffect, useState } from 'react';

import { MainContainer } from '../styled/mainStyles';

import Polder from '../components/Polder';
import Background from '../components/Background';
import ProjectPopup from '../components/ProjectPopup';

import useStore from '../state';
import useProjectStore from '../state/project';

interface StoreState {
  popupState: boolean;
  currentMenu: number;
}

const Main: React.FC = memo(() => {
  const { popupState, currentMenu }: StoreState = useStore(state => state);
  const { projectPopupState } = useProjectStore(state => state);
  const [conHeight, setConHeight] = useState()

  useEffect(() => {
    const height = window.innerHeight;
    setConHeight(height)
  }, [currentMenu])

  return (
    <MainContainer heightProp={conHeight}>
      <Background />
      {popupState && <Polder />}
      {popupState && projectPopupState && <ProjectPopup />}
    </MainContainer>
  );
});

export default Main;