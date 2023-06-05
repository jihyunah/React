import React from 'react';
import { useDispatch } from 'react-redux';

const Color = () => {
    const color = ~~
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{ color: color }}>컬러 : { color }</h1>
            <p>
                <button onClick={ () => dispatchEvent(red()) }>RED</button>
                <button onClick={ () => dispatchEvent(green()) }>GREEN</button>
                <button onClick={ () => dispatchEvent(blue()) }>BLUE</button>
                <button onClick={ () => dispatchEvent(tomato()) }>TOMATO</button>
            </p>
        </div>
    );
};

export default Color;