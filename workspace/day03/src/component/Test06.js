import React, { useState } from 'react';

const Test06 = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')

    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='0'>
                <tr>
                    <th width='100'>이름</th>
                    <td>
                        <input type='text' name='name' value={name}/>
                    </td>
                </tr>
                <tr>
                    <th width='100'>아이디</th>
                    <td>
                        <input type='text' name='id' value={id}/>
                    </td>
                </tr>
                <tr>
                    <th width='100'>비밀번호</th>
                    <td>
                        <input type='password' name='pwd' value={pwd}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={ onReset }>초기화</button>
                    </td>

                </tr>
            </table>
            <hr/>
            <h3>이름 : {name} </h3>
            <h3>아이디 : {id} </h3>
            <h3>비밀번호 : {pwd} </h3>
        </div>
    );
};

export default Test06;