import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEdit = (id, text) => {
        setEditId(id)
        setEditText(text)
    }

    const handleUpdate = () => {
        if (editText.trim()) {
            dispatch(updateTodo({ id: editId, newText: editText }))
            setEditId(null)
            setEditText('')
        }
    }

    return (
        <>
            <div className="container-fluid p-0 p-md-5 mt-3 mt-md-0">
                <h2 className="mb-3 text-center">Todos</h2>
                <div className="row">
                    {todos.length > 0 ? (
                        todos.map((todo) => (
                            <div key={todo.id} className="col-lg-4">
                                <div className="card mb-3">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        {editId === todo.id ? (
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                className="form-control me-2"
                                            />
                                        ) : (
                                            <p className="card-text mb-0">{todo.text}</p>
                                        )}
                                        <div>
                                            {editId === todo.id ? (
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={handleUpdate}
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        className="btn btn-primary btn-sm me-2"
                                                        onClick={() => handleEdit(todo.id, todo.text)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => dispatch(removeTodo(todo.id))}
                                                    >
                                                       Delete
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Todos Available</p>
                    )}
                </div>
            </div>

        </>
    )
}

