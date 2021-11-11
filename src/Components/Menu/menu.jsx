import React from "react";

import './menu.scss'

const Menu = ({ menulist }) => {


    return (
        <div className={`${menulist.size} menu-item`}       
        >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${menulist.imageUrl})`
                }}>
                <div className='content'>
                  
                   <h1 className='title'>{menulist.title}</h1>
                 
                </div>
            </div>
        </div>   
    )
}


export default Menu;
