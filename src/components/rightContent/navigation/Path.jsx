import React, { memo } from 'react';
import { PathContainer } from '../../../styled/RightContentStyles';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineHome } from 'react-icons/ai';
import { BsArrowClockwise } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';
import useStore from '../../../state';
const Path = memo(() => {
  const { menu, currentMenu } = useStore(state => state);
  const pathName = menu[currentMenu - 1].path;
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
          <li><i><AiOutlineHome /></i></li>
          {
            pathName &&
            <>
              <li><i><BiChevronRight /></i></li>
              <span>{pathName}</span>
            </>
          }
        </ul>
      </div>
    </PathContainer>
  );
});

export default Path;