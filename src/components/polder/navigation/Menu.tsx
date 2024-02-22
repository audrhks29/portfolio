import { memo } from 'react';

import useMenuStore from '../../../state/menu-store';

import { AiOutlineClose } from 'react-icons/ai';


const Menu = memo(() => {
  const { currentMenu, activatedMenu } = useMenuStore(state => state)
  const { handleClickMenu, handleDelMenu } = useMenuStore(state => state)

  return (
    <ul className='w-full h-full flex pt-[10px] pl-[10px] text-[14px] text-textColor bg-liColor'>
      {
        activatedMenu.map(item => {
          const { id, label, image } = item;
          return (
            <li
              key={id}
              className={`${currentMenu === id ? "bg-liOnColor hover:bg-liColor" : ""} bg-liColor w-[200px] h-[35px] cursor-pointer text-center flex px-[10px] rounded-t-[10px] hover:bg-liHoverColor`}
            >

              <div className='w-full h-full flex items-center align-middle'
                onClick={() => handleClickMenu(id)}>
                <img src={image} alt={label} className='h-[25px] align-middle' />
                <span className='ml-[10px]'>{label}</span>
              </div>

              <div className=" flex items-center align-middle">
                <i
                  onClick={() => handleDelMenu(id)}
                  className='p-[3px] hover:bg-pathColor'
                >
                  <AiOutlineClose />
                </i>
              </div>

            </li>
          )
        })
      }
    </ul>
  );
});

export default Menu;