import React, { memo, useState } from 'react';

import { ContentContainer, MenuContainer, RightContentContainer } from '../styled/RightContentStyles';

import useStore from '../state';
import Skill from './rightContent/Skill';
import AboutMe from './rightContent/AboutMe';
import Project from './rightContent/Project';

const RightContent = memo(() => {
  const { isRightContent } = useStore(state => state)

  const menu = [
    { id: 1, label: "About Me", image: "../public/images/ico/js.png" },
    { id: 2, label: "Skill", image: "../public/images/ico/html.png" },
    { id: 3, label: "Project", image: "../public/images/ico/css.png" }
  ]

  const [currentMenu, setCurrentMenu] = useState(1)

  return (
    <>
      <RightContentContainer stateProps={isRightContent}>
        <MenuContainer>
          {
            menu.map(item => {
              const { id, label, image } = item;
              return (
                <li
                  key={id}
                  onClick={() => setCurrentMenu(id)}
                  className={currentMenu === id ? "on" : ""}
                >
                  <img src={image} alt={label} />
                  <span>{label}</span>
                </li>
              )
            })
          }
        </MenuContainer>
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