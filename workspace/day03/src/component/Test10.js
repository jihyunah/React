import React, { useRef, useState } from 'react';
import '../css/Test08.css';

const Test10 = () => {
    const seq = useRef(1)
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name: '홍길동',
        age: '25'
    })

    const {name, age} = form;

    const onInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onAdd = (e) => {
        e.preventDefault(); //페이지 이동을 못하게 함.
        if( !name || !age) return

        setData([
            ...data,
            {
                seq: seq.current++,
                name, //key와 value가 똑같으면 한번만 써도 된다.
                age
            }
        ])
         //초기화
          setForm({
             name: '',
             age: ''
          })

          nameRef.current.focus();
    }

    const nameRef = useRef()

   

    return (
        <div>
            <form onSubmit={ onAdd }>
                이름 : <input type='text' name='name' value={ name } onChange={ onInput } ref={ nameRef } />
                <br/>
                나이 : <input type='text' name='age' value={ age } onChange={ onInput } />
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.seq}>
                        {item.seq} / {item.name} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;