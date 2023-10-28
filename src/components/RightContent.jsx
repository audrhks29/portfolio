import React, { memo } from 'react';

import { ContentContainer, RightContentContainer } from '../styled/RightContentStyles';

import useStore from '../state';
import Skill from './rightContent/Skill';
import AboutMe from './rightContent/AboutMe';
import Project from './rightContent/Project';
import Menu from './rightContent/navigation/Menu';
import Path from './rightContent/navigation/Path';
import Home from './rightContent/Home';

const RightContent = memo(() => {
  const { isRightContent, currentMenu } = useStore(state => state)
  return (
    <>
      <RightContentContainer stateProps={isRightContent}>
        <Menu />
        <Path />
        <ContentContainer>
          {currentMenu === 1 && <Home />}
          {currentMenu === 2 && <AboutMe />}
          {currentMenu === 3 && <Skill />}
          {currentMenu === 4 && <Project />}
        </ContentContainer>
      </RightContentContainer>
    </>
  );
});

export default RightContent;