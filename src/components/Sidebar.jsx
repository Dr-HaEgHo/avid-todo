import React from 'react'
import siLogo from '../assets/Avid-logo.png';
import siLogoMark from '../assets/avid-logomark.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Sidebar = ({route, setRoute,todos, status, setStatus, filteredTodos, setFilteredTodos, open, setOpen}) => {

    const navigate =  useNavigate()

    const links = [
        { id: 1, route:'/', title: "All Tasks", icon:<Icon className='icon' icon="bx:list-ul" />},
        { id: 2, route:'/completed', title: "Completed Tasks", icon:<Icon className='icon' icon="gg:play-list-check" />},
        { id: 3, route:'/uncompleted', title: "Uncompleted Tasks", icon:<Icon className='icon' icon="gg:play-list-remove" />},
        // { id: 4, route:'/addNew', title: "Add New Tasks", icon:<Icon className='icon' icon="bx:list-plus" />},
    ]

    
    
    useEffect(() => { 
        navigate(route)
    }, [route])

    const openHandler = () => {
        setOpen(!open)
    }



    return (
        <div 
            style={{width: open === true ? "20%" : "4%"}}
            className='sidebar'>
            <div onClick={openHandler}
                className="si-toggle">
                {
                    open === true ? <Icon className='open-icon' icon="bx:left-arrow-circle" /> :
                    <Icon className='open-icon' icon="bx:right-arrow-circle" />
                }

            </div>
            <div style={{margin: open === true ? "0 0 0 40px" : "0 auto 0 auto"}} className="si-logo">
                <img style={{width: open === true ? "100%" : "30px"}} src={ open === true ? siLogo : siLogoMark} alt="" />
            </div>
            <div className="si-links">
                {
                    links && links.map(link => (
                        <div style={{padding: open ===true ? "10px 0 10px 40px" : "10px 10px 10px 10px"}} onClick={() => {setRoute(link.route)}} key={link.id} className={ route === link.route ? "si-link active" : "si-link"}>
                            { link.icon }
                            <p style={{display: open === true ? "block" : "none"}} >{ link.title}</p>
                        </div>
                    ))
                }
            </div>
            <div style={{padding : open === true ? "10px 0 10px 40px" : "10px 0 10px 10px"}} className="si-logout">
                <Icon className='icon' icon="tabler:logout" />
                <p style={{display: open === true ? "block" : "none"}}>Logout</p>
            </div>


            
            <div
                style={{left: open === true ? "0%" : "-80vw"}}
                className="mobile-sidebar">
                <div onClick={openHandler}
                className="mob-toggle">
                {
                    open === true ? <Icon className='open-icon' icon="bx:left-arrow-circle" /> :
                    <Icon className='open-icon' icon="bx:right-arrow-circle" />
                }

            </div>
            <div style={{margin: open === true ? "0 0 0 40px" : "0 auto 0 auto"}} className="mob-logo">
                <img style={{width: open === true ? "100%" : "30px"}} src={ open === true ? siLogo : siLogoMark} alt="" />
            </div>
            <div className="mob-links">
                {
                    links && links.map(link => (
                        <div style={{ padding: open === true ? "10px 0 10px 40px" : "10px 10px 10px 10px" }}
                            onClick={() => {
                                setRoute(link.route)
                                setOpen(!open)
                            }}
                            key={link.id} className={route === link.route ? "si-link active" : "si-link"}>
                            { link.icon }
                            <p style={{display: open === true ? "block" : "none"}} >{ link.title}</p>
                        </div>
                    ))
                }
            </div>
            <div style={{padding : open === true ? "10px 0 10px 40px" : "10px 0 10px 10px"}} className="mob-logout">
                <Icon className='icon' icon="tabler:logout" />
                <p style={{display: open === true ? "block" : "none", color: "#fff"}}>Logout</p>
            </div>
            </div>
        </div>
    )

}

export default Sidebar;