import React from 'react';
import { useDispatch } from 'react-redux';

const Animal = () => {
    const name = ~~
    const crying = ~~
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1>동물의 울음소리</h1>
            <h1>{ name } {crying }</h1>
            <p>
                <button>호랑이</button>
                <button>강아지</button>
                <button>고양이</button>
                <button>병아리</button>
            </p>
        </div>
    );
};

export default Animal;
