import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = { color: 'black' }
const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return { color: action.text }
        case 'RESET':
            return initialState
        default: 
            return state
    }
}

const Test03 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
           <h1 style={{ color: state.color }}>color : { state.color }</h1>
            <p>
                <button onClick={ ()=> dispatch({ type: 'CHANGE_COLOR', text: 'red' })}>빨강</button>
                <button onClick={ ()=> dispatch({ type: 'CHANGE_COLOR', text: 'green' })}>초록</button>
                <button onClick={ ()=> dispatch({ type: 'CHANGE_COLOR', text: 'blue' })}>파랑</button>
                <button onClick={ ()=> dispatch({ type: 'CHANGE_COLOR', text: 'pink' })}>분홍</button>
                <button onClick={ ()=> dispatch({ type: 'CHANGE_COLOR' })}>초기화</button>
            </p>
        </div>
    );
};

export default Test03;