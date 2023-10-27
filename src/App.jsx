import React, { memo } from 'react';
import Main from './pages/Main';
import GlobalStyle from './styled/globalStyles';

const App = memo(() => {
  return (
    <div className='wrap'>
      <GlobalStyle />
      <Main />
    </div>
  );
});

export default App;