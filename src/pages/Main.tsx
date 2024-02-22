import { memo, useEffect, useState } from 'react';

import Polder from '../components/Polder';
import Background from '../components/Background';
import ProjectPopup from '../components/ProjectPopup';

import useStore from '../state/menu-store';
import useProjectStore from '../state/project-store';

const Main = memo(() => {
  const { popupState, currentMenu } = useStore(state => state);
  const { projectPopupState } = useProjectStore(state => state);
  const [conHeight, setConHeight] = useState<number>(0)

  useEffect(() => {
    const height = window.innerHeight;
    setConHeight(height)
  }, [currentMenu])

  return (
    <div className='w-full relative text-white'
      style={{ height: conHeight }}>
      <Background />
      {popupState && <Polder />}
      {popupState && projectPopupState && <ProjectPopup />}
    </div>
  );
});

export default Main;