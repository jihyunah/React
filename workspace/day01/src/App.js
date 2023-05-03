import React from 'react';
import Dog from './component/Dog.js';
import Test1 from './component/Test1.js';
import Test2 from './component/Test2.js';
import Test3 from './component/Test3.js';
import Test4 from './component/Test4.js';
import Test5 from './component/Test5.js';

const App = () => { 
  return (
    <div> {/* 최상단에서 반드시 div로 감싸주어야 한다. */}
      <Dog /> {/* 태그 한개 한개를 컴포넌트라고 부른다.*/}
      <hr/>
      <Dog />
      <hr/>
      <Test1 />
      <hr/>
      <Test2 />
      <hr/>
      <Test3 />
      <hr/>
      <Test4 />
      <hr/>
      <Test5 />
    </div>
  );
};

export default App;