import { memo, useState } from 'react';

import useStore from '../../state';

const Home = memo(() => {
  const { menu } = useStore(state => state);
  const { handleClickMenu } = useStore(state => state);

  const [imageLoaded, setImageLoaded] = useState(false);

  const filteredMenu = menu.filter(item => item.id !== 1);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <ul className='flex w-full'>
        {
          filteredMenu.map(item => {
            const { id, label, image } = item;
            return (
              <li
                key={id}
                onClick={() => handleClickMenu(id)}
                className='flex flex-col text-center w-[220px] h-[252px] p-5 hover:bg-pathColor'
              >
                <div className='w-[180px] h-[180px]'>
                  <img
                    className='w-full h-full'
                    src={image}
                    alt={label}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                    onLoad={handleImageLoad}
                  />
                </div>
                <span>{label}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
});

export default Home;