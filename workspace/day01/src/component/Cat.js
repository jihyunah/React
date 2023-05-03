import React from 'react';

//props라고 하면, 매개변수가 들어옴.
const Cat = (props) => {
    return (
        <div>
            <h1>나는 { props.name } 컴포넌트</h1>
        </div>
    );
};

export default Cat;