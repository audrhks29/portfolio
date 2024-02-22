import { memo } from 'react';

import useMenuStore from '../state/menu-store';

import { AiOutlineClose } from 'react-icons/ai';

import Skill from './polder/Skill';
import AboutMe from './polder/AboutMe';
import Project from './polder/Project';
import Menu from './polder/navigation/Menu';
import Path from './polder/navigation/Path';
import Home from './polder/Home';

const Polder = memo(() => {
  const { currentMenu, closePopup } = useMenuStore(state => state)

  return (
    <>
      <div className="w-4/5 bg-liOnColor absolute top-1/2 left-1/2 overflow-hidden transform translate-x-[-50%] translate-y-[-50%] border rounded-[10px] border-solid border-polderBorderColor" >
        <Menu />
        <Path />
        <div className="w-full p-5 h-[800px] overflow-auto bg-conBgColor rounded-b-[10px] text-[20px]">
          {currentMenu === 1 && <Home />}
          {currentMenu === 2 && <AboutMe />}
          {currentMenu === 3 && <Skill />}
          {currentMenu === 4 && <Project />}
        </div>
        <div
          className="absolute top-0 right-0 px-[10px] py-1 cursor-pointer hover:bg-[#C42B1C]"
          onClick={closePopup}
        >
          <i>
            <AiOutlineClose />
          </i>
        </div>
      </div>
    </>
  );
});

export default Polder;