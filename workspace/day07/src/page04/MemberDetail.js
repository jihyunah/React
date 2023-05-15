import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberDetail = () => {
    const {memberId} = useParams()

    const[data, setData] = useState([])

    //데이터 가져오기 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then(res => setData(res.data))
    }, []) //버튼을 눌렀을 때 마다 

    const css = {
        border: '1px solid cyan', margin: 20, padding: 20
    }

    return (
        <div style={ css }>
            <h2>MemberDetail Page: { memberId }</h2>
            <h4>이름 : { data.name }</h4>
            <ul>
                <li>이메일 : { data.email }</li>
                <li>전화번호 : { data.phone }</li>
                <li>웹사이트 : { data.website }</li>
            </ul>
        </div>
    );
};

export default MemberDetail;