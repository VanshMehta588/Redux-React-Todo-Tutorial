import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

export const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="text-center">
            <div className="text-center d-flex container-fluid mx-0 mx-md-3 mt-4 p-0">
                <input
                    type="text"
                    className='form-control'
                    placeholder='Enter a Todo....'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type='submit'
                    id="new-task"
                    className='btn btn-success mx-1 mx-sm-4'
                >
                    Add Todo
                </button>
            </div>
        </form>
    )
}
