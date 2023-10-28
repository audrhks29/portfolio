import React, { memo, useState } from 'react';

import { MenuContainer } from '../../../styled/RightContentStyles';
import useStore from '../../../state';

const Menu = memo(() => {
  const { currentMenu, menu } = useStore(state => state)
  const { handleCurrentMenu } = useStore(state => state)
  return (
    <MenuContainer>
      {
        menu.map(item => {
          const { id, label, image } = item;
          return (
            <li
              key={id}
              onClick={() => handleCurrentMenu(id)}
              className={currentMenu === id ? "on" : ""}
            >
              <img src={image} alt={label} />
              <span>{label}</span>
            </li>
          )
        })
      }
    </MenuContainer>
  );
});

export default Menu;