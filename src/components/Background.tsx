import { memo } from 'react';

import useStore from '../state';

const Background = memo(() => {
  const { openPopup } = useStore(state => state)

  return (
    <>
      <div
        className='h-full w-full bg-cover p-[10px] text-[14px]'
        style={{ backgroundImage: 'url(images/wallpaper.jpg)' }}
      >
        <div
          className='w-[110px] p-[10px] hover:bg-pathColor'
          onClick={openPopup}
        >
          <img src="images/projectImage/basic.png" alt="" className='w-full' />
          <p className='text-center tracking-[0.5px]'>PORTFOLIO</p>
        </div>
      </div>
    </>
  );
});

export default Background;