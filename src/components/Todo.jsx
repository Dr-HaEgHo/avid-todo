import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { __RouterContext } from 'react-router';

const Todo = ({ id,todo, text, completed, todos, setTodos, editInput, setEditInput}) => {
    

    const [open, setOpen] = useState(false)
    

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== id))
        console.log(todo.classList)

    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !todo.completed
                }
            }
            return item;
        }))
    }

    const editHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, edit: !todo.edit
                }
            }
            return item;
        }))
    }

    const editInputHandler = (e) => {
        setEditInput(e.target.value) 
        console.log(editInput)
    }

    const passEditedValueHandler = (e) => {
        if (editInput === "") {
            e.target.disabled = true;
        } else {
            setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, text: editInput, edit: !todo.edit
                }

                }
            return item;
        }))
        // setEditInput("")
        }
    }

  return (
    <div className="ri-list-item">
        <div className="ri-item-top">
            <div onClick={completeHandler}>
                {
                    todo.completed ? <Icon className='ri-tick-icon' icon="akar-icons:check-box-fill" /> 
                    : <div className='ri-empty-icon'/>
                }
            </div>
            <div className='ri-top-text'>
                <p style={{textDecoration: todo.completed ? "line-through" : "none"}} className="ri-wrap">{ text  }</p>
            </div>
            <div className='ri-top-icons'>
                <Icon onClick={editHandler} style={{display: todo.edit ? "none " : "flex"}} className='ri-edit-icon-dark' icon="ic:baseline-edit-note" />
                <Icon onClick={deleteHandler} className='ri-delete-icon' icon="ic:baseline-delete-sweep" />
            </div>
        </div>
        <div style={{display: todo.edit ? "flex " : "none"}} className="ri-item-bottom">
            <input onChange={editInputHandler} name='description' className='ri-item-bottom-input' type="text" />
            <div  className='ri-item-bottom-icons'>
                <Icon onClick={passEditedValueHandler} className='ri-saved-icon' icon="dashicons:saved" />
                <Icon onClick={editHandler} className='ri-cancel-icon' icon="ci:close-small" />
            </div>
        </div>
    </div>
  )
}

export default Todo;