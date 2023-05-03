import React from 'react';
import Cat from './Cat.js';
import Lion from './Lion.js';
import Person from './Person.js';

const Test4 = () => {
    return (
        <div>
            <Cat name='고양이'/>
            <Lion name='사자'/>
            <Person name='홍길동' age='25'/>
        </div>
    );
};

export default Test4;