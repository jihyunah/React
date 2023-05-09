import React, { useState } from 'react';
import Fruit from './Fruit.js';
import Name from './Name.js';
import Output from './Output.js';

const Test05 = () => {
    const [name, setName] = useState('홍길동')
    const [fruit, setFruit] = useState('홍시')

    const onInputName = (e) => {
        const {value} = e.target;
        setName(value);
    }

    const onInputFruit = (e) => {
        const {value} = e.target;
        setFruit(value);
    }

    return (
        <div>
            <Name name={name} onInputName={onInputName}/>
            <br/>
            <Fruit fruit={fruit} onInputFruit={onInputFruit}/>
            <br/>
            <Output name={name} fruit={fruit}/> 
        </div>
    );
};

export default Test05;