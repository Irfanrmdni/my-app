import React from 'react';

function Todo() {
    // * state
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState('');

    // * membuat random id
    function generateID() {
        return Date.now();
    }

    // * add & save todo
    function saveTodo(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage('activity masih kosong');
        }

        // * set message
        setMessage('');

        // * edit todo
        if (edit.id) {
            const updateTodo = {
                id: edit.id,
                ...edit,
                activity: activity,
            }

            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id === edit.id;
            })

            const updateTodos = [...todos];

            updateTodos[editTodoIndex] = updateTodo;

            setTodos(updateTodos);

            return cancelEdit();
        }

        setTodos([...todos, {
            id: generateID(),
            activity: activity,
            done: false,
        }]);

        // * clear activity / inputan
        setActivity('');
    }

    // * hapus todo
    function hapusTodo(todoID) {
        const tanya = this.confirm('ingin dihapus ?');

        if (tanya === true) {
            const filterTodos = todos.filter(function (todo) {
                return todo.id !== todoID;
            });

            setTodos(filterTodos);

            if (edit.id) {
                cancelEdit();
            }
        }
    }

    // * inputan 
    function ketikaChange(event) {
        setActivity(event.target.value);
    }

    // * edit todo
    function editTodo(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }

    // * cancel edit
    function cancelEdit() {
        setEdit({});
        setActivity('');
    }

    // * done handler
    function doneToDoHandler(todo) {
        const updateTodo = {
            ...todo,
            done: todo.done ? false : true,
        }

        const editTodoIndex = todos.findIndex(function (currentTodo) {
            return currentTodo.id === todo.id;
        })

        const updateTodos = [...todos];

        updateTodos[editTodoIndex] = updateTodo;

        setTodos(updateTodos);
    }

    return (
        <>
            <h1>Simple To Do List</h1>

            {message && <p style={{ color: 'red' }}>{message}</p>}

            <form onSubmit={saveTodo}>
                <input type="text" value={activity} onChange={ketikaChange} placeholder="masukan activity..." />
                <button type="submit">{edit.id ? 'simpan perubahan' : 'tambah'}</button>
                {edit.id ? <button onClick={cancelEdit}>batal edit</button> : ''}
            </form>

            {todos.length > 0 ?
                <ul>
                    {todos.map(function (todo) {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={doneToDoHandler.bind(this, todo)} />
                                {todo.activity}
                                ({todo.done ? 'Selesai' : 'Belum selesai'})
                                <button onClick={editTodo.bind(this, todo)}>Edit</button>
                                <button onClick={hapusTodo.bind(this, todo.id)}>hapus</button>
                            </li>
                        );
                    })}
                </ul>
                : (<p>tidak ada todo</p>)
            }
        </>
    );
}

export default Todo;