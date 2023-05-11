import React, { useState, useRef } from 'react';
import styles from '../css/TodoForm.module.css';
import Todos from './Todos.js';

const TodoForm = ({onAdd}) => {
    const textRef = useRef();
    const [text, setText] = useState();

    const onInput = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault(); //submit의 page 이동을 막는다. 

        if(!text) return;

        onAdd(text); //보내버리기
        setText(); //초기화시키기 

        textRef.current.focus();
    }

    return (
        <div>
            <form className={ styles.TodoForm }  onSubmit={ onSubmit }>
                <input type='text' placeholder='해야 할 일을 넣으세요' onChange= { onInput } ref={ textRef }/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default TodoForm;