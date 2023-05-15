import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Member from './Member';

const Main = () => {
    const [data, setData] = useState([])

    //데이터 가져오기 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then(res => setData(res.data))
    }, []) //버튼을 눌렀을 때 마다 

    return (
        <div>
            <h1>Main Page / 회원수 : { data.length }</h1>
            {
                data.map((item) => <Member key={ item.id } item={ item }/>)
            }
        </div>
    );
};

export default Main;