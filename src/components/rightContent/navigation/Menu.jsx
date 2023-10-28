import React, { memo, useState } from 'react';

import { MenuContainer } from '../../../styled/RightContentStyles';
import useStore from '../../../state';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = memo(() => {
  const { currentMenu, activatedMenu } = useStore(state => state)
  const { handleClickMenu, handleDelMenu } = useStore(state => state)
  return (
    <MenuContainer>
      {
        activatedMenu.map(item => {
          const { id, label, image } = item;
          return (
            <li
              key={id}
              className={currentMenu === id ? "on" : ""}
            >
              <div className='text_box'
                onClick={() => handleClickMenu(id)}>
                <img src={image} alt={label} />
                <span>{label}</span>
              </div>
              <div className='close_box'>
                <i onClick={() => handleDelMenu(id)}>
                  <AiOutlineClose />
                </i>
              </div>
            </li>
          )
        })
      }
    </MenuContainer>
  );
});

export default Menu;