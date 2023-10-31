import React, { memo } from 'react';

import { ContentContainer, PolderContainer } from '../styled/polderStyles';

import useStore from '../state';

import { AiOutlineClose } from 'react-icons/ai';

import Skill from './polder/Skill';
import AboutMe from './polder/AboutMe';
import Project from './polder/Project';
import Menu from './polder/navigation/Menu';
import Path from './polder/navigation/Path';
import Home from './polder/Home';

const Polder = memo(() => {
  const { currentMenu, closePopup } = useStore(state => state)
  return (
    <>
      <PolderContainer>
        <Menu />
        <Path />
        <ContentContainer>
          {currentMenu === 1 && <Home />}
          {currentMenu === 2 && <AboutMe />}
          {currentMenu === 3 && <Skill />}
          {currentMenu === 4 && <Project />}
        </ContentContainer>
        <div
          className='popup_close_box'
          onClick={closePopup}
        >
          <i>
            <AiOutlineClose />
          </i>
        </div>
      </PolderContainer>
    </>
  );
});

export default Polder;