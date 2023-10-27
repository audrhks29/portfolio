import React, { memo, useEffect, useState } from 'react';

import { MainContainer } from '../styled/mainStyles';

import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContent';

const Main = memo(() => {

  const [conHeight, setConHeight] = useState()

  useEffect(() => {
    const height = window.innerHeight;
    setConHeight(height)
  }, [])

  return (
    <MainContainer heightProp={conHeight}>
      <LeftContent />
      {/* <img src="../public/images/profilepic.png" alt="" /> */}
      <RightContent />

    </MainContainer>
  );
});

export default Main;