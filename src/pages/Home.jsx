import React, { useState } from "react";
import { useEffect } from "react";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";

const Home = () => {

    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState()
    const [userName, setUserName] = useState("")
    // const [status, setStatus] = useState("all")
    const [route, setRoute] = useState('/');
    const [open, setOpen] = useState(false);


    // RUN ONLY ONCE WHEN THE APP LOADS
    useEffect(() => { 
        getLocalTodos();
    } , [])

    // RUN EVERYTIME THE "TODOS" STATE IS UPDATED
    useEffect(() => { 
        routeHandler();
        saveLocalTodos();
    } , [ todos, route]) 
  

    const routeHandler = () => {
        switch (route) {
            case "/completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "/uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default: 
                setFilteredTodos(todos)
        }
    }

   

    const getLocalTodos = () => {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            let localTodos = JSON.parse(localStorage.getItem("todos")); 
            setTodos(localTodos);
        }
    };

    

     const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }


 
    return (



         
        <div className="home">
            <Sidebar
                route={route}
                setRoute={setRoute}
                todos={todos}
                userName={userName}
                setUserName={setUserName}
                // status={status}
                // setStatus={setStatus}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                open={open}
                setOpen={setOpen}
            />
            <RightBar
                route={route}
                setRoute={setRoute}
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                userName={userName}
                setUserName={setUserName}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}

export default Home;