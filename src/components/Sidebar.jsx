import React from 'react'
import siLogo from '../assets/Avid-logo.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Sidebar = () => {

    const navigate =  useNavigate()

    const links = [
        { id: 1, route:'/', title: "All Tasks", icon:<Icon className='icon' icon="bx:list-ul" />},
        { id: 2, route:'/completed', title: "Completed Tasks", icon:<Icon className='icon' icon="gg:play-list-check" />},
        { id: 3, route:'/uncompleted', title: "Uncompleted Tasks", icon:<Icon className='icon' icon="gg:play-list-remove" />},
        { id: 4, route:'/addNew', title: "Add New Tasks", icon:<Icon className='icon' icon="bx:list-plus" />},
    ]

    const [open, setOpen] = useState(true);
    const [route, setRoute] = useState('/');

    
    useEffect(() => { 
        navigate(route)
    }, [route])

    return (
        <div 
            style={{
                width: open === true ? "20%" : "4%",
            }}
            className='sidebar'>
            <div
                onClick={() =>
                {
                    setOpen(!open)
                }}
                className="si-toggle">
                {
                    open === true ? <Icon className='open-icon' icon="bx:left-arrow-circle" /> :
                    <Icon className='open-icon' icon="bx:right-arrow-circle" />
                }

            </div>
            <div className="si-logo">
                <img src={siLogo} alt="" />
            </div>
            <div className="si-links">
                {
                    links && links.map(link => (
                        <div onClick={() => {
                            // alert(link.route)
                            setRoute(link.route)
                        }} key={link.id} className={ route === link.route ? "si-link active" : "si-link"}>
                            { link.icon }
                            <p>{ link.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="si-logout">
                <Icon className='icon' icon="tabler:logout" />
                <p>Logout</p>
            </div>
        </div>
    )

}

export default Sidebar;