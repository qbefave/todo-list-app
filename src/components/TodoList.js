import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoMore from "./TodoMore";


const TodoList = () => {
    //Объявление новой переменной состояния, для отслеживания массива заметок
    const [todos, setTodos] = useState([])
    //Объявление новой переменной состояния, для отслеживания рассматриваемой заметки
    const [curTodoId, setCurTodoId] = useState({
        id: null
    })


    //Функция добавления новой заметки
    const addTodo = todo => {
        //Условие: если строка пустая или содержит только пробелы
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        //Объявление нового массива с новой заметкой
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

    };
    //Функция измениения рассматриваемой заметки
    const editTodo = (todoId, newTodo) => {
        if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
            return
        }
        //Обновление состояния массива заметок-меняем содержимое заметки с заданным ID
        setTodos(prev => prev.map(item => (item.id === todoId ? newTodo : item)))
        //Сброс текущей заметки
        setCurTodoId({id: null, value: '', state: ''})
    }

    //Функция удаления рассматриваемой заметки
    const removeTodo = id => {
        //Новый массив, из элементов у которых ID не равен заданному
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
        setCurTodoId({id: null, value: '', state: ''})
    }

    //Функция для отображения поля редактирования заметки
    const openTodo = id => {
        //Задаем ID заметки для редактирования
        setCurTodoId(id)
        console.log(curTodoId)
    }

    return (
        <div className='todo-container'>
            <h1> Ur TODO list</h1>
            {/*Форма для добавления заметок*/}
            <TodoForm onSubmit={addTodo}/>
            {/*Вертикальный список с наименованиями заметок TODO*/}
            <Todo
                todos={todos}
                openTodo={openTodo}
            />
            {/*Область взаимодействия заметки TODO*/}
            <TodoMore
                todos={todos}
                curTodoId={curTodoId}
                removeTodo={removeTodo}
                editTodo={editTodo}
            />
        </div>
    );
};

export default TodoList;