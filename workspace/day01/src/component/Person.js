import React from 'react';

const Person = ({name, age}) => { // props 대신, 이렇게 객체로 받아도 된다.
    return (
        <div>
            <h1>나의 이름은 { name }, 나이는 { age }살 입니다.</h1>
        </div>
    );
};

export default Person;