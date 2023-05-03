import React from 'react';
import Dog from './Dog.js';
import Test1 from './Test1.js';

const App = () => { 
  return (
    <div> {/* 최상단에서 반드시 div로 감싸주어야 한다. */}
      <Dog /> {/* 태그 한개 한개를 컴포넌트라고 부른다.*/}
      <Dog />
      <Test1 />
    </div>
  );
};

export default App;