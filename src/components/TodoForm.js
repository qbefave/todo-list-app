import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {
    //Объявление новой переменной состояния, для отслеживания вхождения в input,
    //в режиме редактирования initialState равен текущему содержанию заметки
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    //Объявление переменной для хранения ссылки на содержимое рассматриваемой заметки
    const inputRef = useRef(null)
    //Определяем побочный эффект для фокуссирования на элементе на который указывает ссылка
    useEffect(() => {
        inputRef.current.focus()

    })
    //Функция для отображения вводимого текста
    const controlChange = e => {
        setInput(e.target.value)

    }
    //Функция для изменения поведения формы
    const controlSubmit = e => {
        //предотващаем обновление страницы
        e.preventDefault()


        props.onSubmit({
            //генерация рандомных ID
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')

    }


    return (
        <form className="todo-form" onSubmit={controlSubmit}>
            {/*Проверка: если производится редактирование заметки,
            то возвращается первая из двух форм*/}
            {props.edit ? (<>
                    <input
                        type="text"
                        placeholder='edit a todo'
                        value={input} name='text'
                        className='todo-input '
                        onChange={controlChange}
                        //устанавливаем привязку поля к ссылке inputRef
                        ref={inputRef}
                    />
                    {/*Кнопка для редактирования заметки*/}
                    <button className='todo-button'>Edit</button>
                </>)
                :
                (
                    <>
                        <input
                            type="text"
                            placeholder='add a todo'
                            value={input} name='text'
                            className='todo-input add'
                            onChange={controlChange}
                            ref={inputRef}
                        />
                        {/*Кнопка для добавления заметки*/}
                        <button className='todo-button add'>Add</button>
                    </>
                )


            }

        </form>
    );
};

export default TodoForm;