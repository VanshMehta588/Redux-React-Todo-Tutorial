import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container-fluid p-0 p-md-5 mt-3 mt-md-0">
                <h2 className="mb-3 text-center">Todos</h2>
                <div className="row">
                    {todos.length > 0 ? (
                        todos.map((todo) => (
                            <div key={todo.id} className="col-md-4">
                                <div className="card mb-3">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="card-text mb-0">{todo.text}</p>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                        >
                                            X
                                        </button>
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
