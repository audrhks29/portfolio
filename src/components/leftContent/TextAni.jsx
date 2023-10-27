import React, { memo } from 'react';
import { TextAniContainer } from '../../styled/LeftContentStyles';

const TextAni = memo(() => {
  return (
    <TextAniContainer>
      <h1 className="jt --debug">
        <span className="jt__row">
          <p className="jt__text">MyungKwan's</p>
          <p className='jt__text'>Portfolio</p>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <p className="jt__text">MyungKwan's</p>
          <p className='jt__text'>Portfolio</p>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <p className="jt__text">MyungKwan's</p>
          <p className='jt__text'>Portfolio</p>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <p className="jt__text">MyungKwan's</p>
          <p className='jt__text'>Portfolio</p>
        </span>
      </h1>
    </TextAniContainer>
  );
});

export default TextAni;