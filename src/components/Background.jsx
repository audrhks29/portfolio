import React, { memo } from 'react';

import useStore from '../state';
import { BackgroundContainer } from '../styled/BackgroundStyles';

const Background = memo(() => {
  const { openPopup } = useStore(state => state)
  return (
    <>
      <BackgroundContainer>
        <div
          className='polder_box'
          onClick={openPopup}
        >
          <img src="images/projectImage/basic.png" alt="" />
          <p>PORTFOLIO</p>
        </div>
      </BackgroundContainer>
    </>
  );
});

export default Background;