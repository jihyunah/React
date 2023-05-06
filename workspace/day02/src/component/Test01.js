import React from 'react';

const Test01 = () => {
    
    //화살표 함수
    const test1 = () => {
        alert('test1');
    }

    // function test1(){
    //     alert('test1');
    // }

    return (
        <div>
            <h2>이벤트 : on+첫글자 대문자</h2>
            <p>
                <button onClick={ test1 }>클릭</button>
            </p>
        </div>
    );
};

export default Test01;