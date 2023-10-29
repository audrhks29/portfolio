import React, { memo } from 'react';

import { HomeContainer } from '../../styled/RightContentStyles';

import useStore from '../../state';

const Home = memo(() => {
  const { menu } = useStore(state => state);
  const { handleClickMenu } = useStore(state => state);
  const filteredMenu = menu.filter(item => item.id !== 1);
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
                <img src={image} alt={label} />
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