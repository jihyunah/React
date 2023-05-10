import React, { useEffect, useState } from 'react';

const Test02Sub = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const onMove = (e) => {
        //브라우저에서 사용자가 웹페이지가 보여지는 영역을 기준으로 좌표를 표시 
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', onMove) //window.addEventListener를 사용하여 mousemove 이벤트가 발생할 때 onMove 함수를 호출하도록 등록합니다.

        return () => { //Clean-up 함수를 정의 
            console.log('cleanup')
            window.removeEventListener('mouseover', onMove)
            //window.removeEventListener를 사용하여 이전에 등록한 mousemove 이벤트 핸들러인 onMove를 제거합니다. 이를 통해 이벤트 리스너의 중복 등록을 방지하고 메모리 누수를 방지합니다.
        }
    }, [])

    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{ border: '1px solid #000', width: 400, padding: 30, margin: 15 }}>
                <h3>X축 : { x }, Y축 : { y }</h3>
            </div>
        </div>
    );
};

export default Test02Sub;