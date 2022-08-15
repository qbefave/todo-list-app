import React from 'react';
import {CgMore} from "react-icons/cg";

const Todo = ({todos, openTodo}) => {


    return todos.map((todo, index) => (
        <div className='todo-row'
             key={index}>
            {/*Вертикальный список заметок*/}
            <div className='todo-text' key={todo.id}>
                {todo.text}

            </div>
            <div className='buttons'>
                {/*Кнопка для открытия раздела взаимодействия заметки*/}
                <CgMore
                    onClick={() => openTodo(todo.id)}
                    className='more-button'
                />
            </div>
        </div>
    ))
};


export default Todo;