import React, { useState, useRef } from 'react';
import styles from '../css/Todos.module.css';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

const Todos = () => {
    const [data, setData] = useState([])
    const seq = useRef(data.length+1);

    const onAdd = (text) => {
        setData([
            ...data,
            {
                seq: seq.current++,
                text   
            }
        ]);
    }

    const onDel = (seq) => {
        setData(data.filter(item => item.seq != seq ));
    }

    return (
        <div className={ styles.Todos }>
            <h1>일정관리</h1>
            <TodoForm onAdd={ onAdd }/>
            <TodoList data={ data } onDel={onDel}/>
        </div>
    );
};

export default Todos;