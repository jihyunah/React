import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const { memberId } = useParams()
    const[member, setMember] = useState({})
    const navigate = useNavigate()

    const {name, email, phone, website} = member

    //데이터 가져오기 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
             .then(res => setMember(res.data))
    }, []) //버튼을 눌렀을 때 마다 

    const onBack = () => {
        //navigate('/')
        navigate(-1) //전 페이지로 이동해라
    }

    const css = {
        border: '1px solid cyan', margin: 20, padding: 20
    }

    return (
        <div style={ css }>
            <h2>MemberDetail Page: { memberId }</h2>
            <h4>이름 : { name }</h4>
            <ul>
                <li>이메일 : { email }</li>
                <li>전화번호 : { phone }</li>
                <li>웹사이트 : { website }</li>
            </ul>
            <button onClick={ onBack }>뒤로</button>
        </div>
    );
};

export default MemberDetail;