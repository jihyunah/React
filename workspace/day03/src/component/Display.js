import React from 'react';

const Display = ({name}) => {
    return (
        <div>
             <h2>Display 컴포넌트</h2>
            <label>내가 좋아하는 동물은 {name} 입니다. </label>
        </div>
    );
};

export default Display;