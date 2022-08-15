import React, {useState} from 'react';
import {FaWindowClose} from "react-icons/fa";
import {BiMessageSquareEdit} from "react-icons/bi";
import TodoForm from "./TodoForm";


const TodoMore = ({todos, removeTodo, editTodo, curTodoId}) => {
    //Объявление новой переменной состояния, для отслеживания изменения содержимого заметки
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    //Функция для отправки отредактированной заметки
    const submitEdit = value => {
        editTodo(edit.id, value)
        //обнуление переменной состояния
        setEdit({
            id: null,
            value: ''
        })
    }
    //Условие: если выбран режим редактирования, отобразить форму для ввода нового содержания заметки
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit}/>
    }

    return (
        <div>
            {/*При условии, что ни одна заметка не выбрана, область взаимодействия не отображается*/}
            {curTodoId.id === null ?
                null
                : <div className='todo-row edit'>
                    {/*Содержание заметки*/}
                    <div>
                        {todos.find(todo => todo.id === curTodoId).text}</div>
                    <div className='buttons'>
                        {/*Кнопка для изменения содержания заметки*/}
                        <BiMessageSquareEdit
                            onClick={() =>
                                setEdit({id: curTodoId, value: todos.find(todo => todo.id === curTodoId).text})
                            }
                            className='edit-button'
                        />
                        {/*Кнопка для удаления заметки*/}
                        <FaWindowClose
                            onClick={() => removeTodo(curTodoId)}
                            className='delete-button'
                        />

                    </div>

                </div>}
        </div>
    )
};

export default TodoMore;


