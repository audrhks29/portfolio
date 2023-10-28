import React, { memo } from 'react';

import { ContentContainer, RightContentContainer } from '../styled/RightContentStyles';

import useStore from '../state';
import Skill from './rightContent/Skill';
import AboutMe from './rightContent/AboutMe';
import Project from './rightContent/Project';
import Menu from './rightContent/navigation/Menu';
import Path from './rightContent/navigation/Path';

const RightContent = memo(() => {
  const { isRightContent, currentMenu } = useStore(state => state)

  return (
    <>
      <RightContentContainer stateProps={isRightContent}>
        <Menu />
        <Path />
        <ContentContainer>
          {currentMenu === 1 && <AboutMe />}
          {currentMenu === 2 && <Skill />}
          {currentMenu === 3 && <Project />}
        </ContentContainer>
      </RightContentContainer>
    </>
  );
});

export default RightContent;