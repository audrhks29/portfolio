import { memo } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineHome } from 'react-icons/ai';

import { BsArrowClockwise } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

import useMenuStore from '../../../state/menu-store';

const Path = memo(() => {
  const { menu, currentMenu } = useMenuStore(state => state);
  const { handleGotoHome } = useMenuStore(state => state);

  const pathName = () => {
    if (currentMenu == 0) return
    else return menu[currentMenu - 1].path;
  }

  return (
    <div className="text-textColor w-full h-[45px] bg-liOnColor border-y border-solid border-conBgColor flex relative">
      <ul className='flex w-[200px] h-full items-center justify-around'>
        <li className='cursor-pointer w-8 h-8 text-center relative hover:bg-pathColor'>
          <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-pathColor'><AiOutlineArrowLeft /></i>
        </li>
        <li className='cursor-pointer w-8 h-8 text-center relative hover:bg-pathColor'>
          <i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-pathColor'><AiOutlineArrowRight /></i></li>
        <li className='cursor-pointer w-8 h-8 text-center relative hover:bg-pathColor'><i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-pathColor'><AiOutlineArrowUp /></i ></li>
        <li className='cursor-pointer w-8 h-8 text-center relative hover:bg-pathColor'><i className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-pathColor'><BsArrowClockwise /></i></li>
      </ul>
      <div className='w-cal-100per-220px h-[45px] flex absolute top-1/2 left-[200px] -translate-y-1/2 items-center'>
        <ul className="bg-pathColor w-full h-[32px] leading-[30px] px-[10px] flex items-center">
          <li
            onClick={handleGotoHome}
            className="mr-[10px] cursor-pointer px-[5px] hover:bg-pathHoverColor"
          >
            <i className='align-middle'><AiOutlineHome /></i>
          </li>
          {
            pathName() !== null &&
            <>
              <li className='mr-[10px]'>
                <i className='align-middle'><BiChevronRight /></i>
              </li>
              <span>{pathName()}</span>
            </>
          }
        </ul>
      </div>
    </div>
  );
});

export default Path;