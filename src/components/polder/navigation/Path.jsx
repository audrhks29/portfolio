import React, { memo } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineHome } from 'react-icons/ai';

import { BsArrowClockwise } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

import useStore from '../../../state';

import { PathContainer } from '../../../styled/polderStyles';

const Path = memo(() => {
  const { menu, currentMenu } = useStore(state => state);
  const { handleGotoHome } = useStore(state => state);

  const pathName = () => {
    if (currentMenu == 0) return
    else return menu[currentMenu - 1].path;
  }

  return (
    <PathContainer>
      <ul className='icon_box'>
        <li><i><AiOutlineArrowLeft /></i></li>
        <li><i><AiOutlineArrowRight /></i></li>
        <li><i><AiOutlineArrowUp /></i></li>
        <li><i><BsArrowClockwise /></i></li>
      </ul>
      <div className='path_box'>
        <ul className='path_box_inner'>
          <li
            onClick={handleGotoHome}
            className='can_hover'
          >
            <i><AiOutlineHome /></i>
          </li>
          {
            pathName() !== null &&
            <>
              <li><i><BiChevronRight /></i></li>
              <span>{pathName()}</span>
            </>
          }
        </ul>
      </div>
    </PathContainer>
  );
});

export default Path;