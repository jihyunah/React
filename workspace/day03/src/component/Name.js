import React from 'react';
import Fruit from './Fruit.js';
import Output from './Output.js';

const Name = ({name, onInputName}) => {
    return (
        <div>
           이름 입력 : <input type="text" value={name} onChange={onInputName}/> 
        </div>
    );
};

export default Name;