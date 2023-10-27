import React, { memo } from 'react';

import { LeftContentContainer } from '../styled/LeftContentStyles';

import useStore from '../state';
import TextAni from './leftContent/TextAni';

const LeftContent = memo(() => {
  const { isRightContent } = useStore(state => state)
  const { toggleIsRightContent } = useStore(state => state)
  return (
    <>
      <LeftContentContainer stateProps={isRightContent}>
        <TextAni />
        <button onClick={toggleIsRightContent}>보러가기</button>
      </LeftContentContainer>
    </>
  );
});

export default LeftContent;