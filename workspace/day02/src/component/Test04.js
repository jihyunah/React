import React, { useState } from 'react';

const Test04 = () => {
    const [visible, setVisible] = useState(true)
    
    const onShow = () => {
        setVisible(true);
    }

    const onHide = () => {
        setVisible(false);
    }

    const onToggle = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={ onShow }>보이기</button>
            <button onClick= { onHide }>숨기기</button>
            <button onClick={ onToggle }>{visible ? '숨기기' : '보이기'}</button>
            <hr/>
            { //visible이 true일 때 div 보이게 하기. 
                // visible && <div style={{ width: 300, height: 300, margin: 20, background: 'pink'}}></div>
                //visible이 true일 때 div 보이게 하기. 위와 같은 것.
                visible ? <div style={{ width: 300, height: 300, margin: 20, background: 'pink'}}></div> : null
            }
        </div>
    );
};

export default Test04;