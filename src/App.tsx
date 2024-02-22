import { memo } from 'react';

import Main from './pages/Main';

const App = memo(() => {
  return (
    <div className='wrap'>
      <Main />
    </div>
  );
});

export default App;