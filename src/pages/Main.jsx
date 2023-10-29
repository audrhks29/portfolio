import React, { memo, useEffect, useState } from 'react';

import { MainContainer } from '../styled/mainStyles';

import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContent';
import useStore from '../state';

const Main = memo(() => {
  const { currentMenu } = useStore(state => state)
  const [conHeight, setConHeight] = useState()

  useEffect(() => {
    const height = window.innerHeight;
    setConHeight(height)
  }, [currentMenu])
  console.log(conHeight);
  return (
    <MainContainer heightProp={conHeight}>
      <LeftContent />
      <RightContent />
    </MainContainer>
  );
});

export default Main;