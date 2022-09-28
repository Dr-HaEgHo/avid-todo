import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const RightBar = () => { 

    const details = JSON.parse(localStorage.getItem('todoUserDetails'))

    const [isEditing, setIsEditing] = useState(true);
    const [name, setUserName] = useState()



    return (
        <div className='rightbar'>
            <div className="ri-name-search">
                <div className='ri-name'>
                    <p style={{fontSize: "22px", fontWeight:"500"}}>Hi, </p>
                    <input className='ri-name-input' disabled={isEditing} type="text" placeholder='Your Name Here'/>
                    <div style={{cursor: "pointer"}} onClick={()=>{setIsEditing(!isEditing)}}>
                        {
                            isEditing === true ? <Icon className='ri-edit-icon' icon="akar-icons:edit" /> : 
                            <Icon  className='ri-edit-icon' icon="dashicons:saved" />
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
            <div className="ri-list-box"></div>
        </div>
    )
}

export default RightBar;