import React from 'react'
import { Icon } from '@iconify/react';

const AddNewTodo = ({ inputText, setInputText, todos, setTodos, newTodo, setNewTodo, editInput, setEditInput }) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            e.target.disabled = true;
        } else {
            setTodos([
                ...todos, { text: inputText, completed: false, edit:false , id: Math.floor(Math.random() * 1000) }
            ])
            setInputText("");
        }
    }

    const newTodoHandler = () => {
        setNewTodo(!newTodo)
        console.log(newTodo)
    }

  return (
    <div style={{display : newTodo ? "flex" : "none"}}  className="ri-add-new-wrapper">
        <h1>Add New Todo</h1>
        <div >
            <form className="ri-add-new">
                <input onChange={inputTextHandler} value={inputText} type="text"/>
                <div className="ri-add-new-icons">
                      <button onClick={submitHandler} type='submit'>
                          <Icon className='ri-saved-icon' icon="dashicons:saved" />
                      </button>
                        <Icon onClick={newTodoHandler} className='ri-cancel-icon' icon="ci:close-small" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNewTodo;