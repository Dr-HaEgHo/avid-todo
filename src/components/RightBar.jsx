import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import ListItem from './ListItem';
import { useEffect } from 'react';
import AddNewTodo from './AddNewTodo';
import Todo from './Todo';

const RightBar = ({ route, setRoute, inputText, setInputText, todos, setTodos, userName, setUserName, filteredTodos, setFilteredTodos, open, setOpen }) => { 
    
    const [addTodoText, setAddTodoText] = useState(inputText);
    const [searchText, setSearchText] = useState("")
    const [newTodo, setNewTodo] = useState(false)
    const [canEditUsername, setCanEditUsername] = useState(false)
    const [editInput, setEditInput] = useState("")

    const newTodoHandler = () => {
        setNewTodo(!newTodo)
    }

    const filterTodos = (id) => {
        setTodos(todos.filter(todo => todo.desc === searchText))
    }

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const toggleUsername = () => {
        setCanEditUsername(!canEditUsername)
    }


    return (
        <div className='rightbar'>
            <div className="ri-name-search">
                <div onClick={() => {setOpen(!open)}} className="ri-open-up">
                    <Icon className='open-icon' icon="bx:right-arrow-circle" />
                </div>
                <div className='ri-name'>
                    <p style={{fontSize: "22px", fontWeight:"500"}}>Hi, </p>
                    <input onChange={userNameHandler} className='ri-name-input' disabled={!canEditUsername} type="text" value={userName} placeholder='Click to Edit Username ▶'/>
                    <div onClick={toggleUsername} style={{cursor: "pointer"}} >
                        {
                            canEditUsername ? <Icon  className='ri-edit-icon' icon="dashicons:saved" /> : <Icon className='ri-edit-icon' icon="akar-icons:edit" /> 
                        }
                    </div>
                </div>
                <div className='ri-search'>
                    <div className='ri-search-bar'>
                        <Icon className='ri-search-icon' icon="gg:play-list-search" />
                        <hr style={{
                            height: "80%", border: "none", borderRight:"1px #1e1e1e solid" }} />
                        <input type="text"  />
                    </div>
                    <button className='ri-search-btn'> Search</button>
                </div>
            </div>
            <div className="ri-list-box">
                <div className="ri-title">
                    <h3>My Tasks</h3>
                    <Icon onClick={newTodoHandler} style={{display: newTodo ? "none" : "flex"}} className='ri-add-icon' icon="bx:list-plus"/>
                </div>
                <div className='ri-tray-wrapper'>
                    <div className="ri-tray">
                        <AddNewTodo
                            inputText={inputText}
                            setInputText={setInputText}
                            todos={todos}
                            setTodos={setTodos}
                            newTodo={newTodo}
                            setNewTodo={setNewTodo}
                            editInput={editInput}
                            setEditInput={setEditInput}
                        />

                        {
                            filteredTodos && filteredTodos.length > 0 ? filteredTodos.map((todo, index) => (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                id={todo.id}
                                index={ index}
                                text={todo.text}
                                completed={todo.completed}
                                todos={todos}
                                setTodos={setTodos}
                                editInput={editInput}
                                setEditInput={setEditInput}
                              />
                            )) : (<div className='no-todos'>No Todos yet, Add a new todo ?</div>)
                        }
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default RightBar;