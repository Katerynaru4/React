import React, { useState } from 'react';
import Dimensions from './Dimensions.jsx';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div>
        <button onClick={() => setIsVisible(true)}>Show</button>
        <button onClick={() => setIsVisible(false)}>Hide</button>
        {isVisible && <Dimensions />}
      </div>
    </div>
  );
};

export default App;
