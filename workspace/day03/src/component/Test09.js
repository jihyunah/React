import React from 'react';
import img01 from '../img/cat1.jpg';
import img02 from '../img/cat2.jpg';
import img03 from '../img/cat3.jpg';
import img04 from '../img/cat4.jpg';

const Test09 = () => {
    return (
        <div>
            <img src={img01} style={{ width: 200, height: 200}}/>
            <img src={img02} style={{ width: 200, height: 200}}/>
            <img src={img03} style={{ width: 200, height: 200}}/>
            <img src={img04} style={{ width: 200, height: 200}}/>
        </div>
    );
};

export default Test09;

/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
[형식]
  import 참조변수 from '이미지경로';
*/