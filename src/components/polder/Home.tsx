import { memo, useState } from 'react';

import { HomeContainer } from '../../styled/polderStyles';

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
    <HomeContainer>
      <ul className='polder'>
        {
          filteredMenu.map(item => {
            const { id, label, image } = item;
            return (
              <li
                key={id}
                onClick={() => handleClickMenu(id)}
              >
                <div className='img_box'>
                  <img
                    className='loadedImg'
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
    </HomeContainer>
  );
});

export default Home;