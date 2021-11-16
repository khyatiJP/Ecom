import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import './Menu.scss'
import { Item } from '../MenuItem/Item'

const Menu = ({ menulist }) => {
    return (
     
            <div className={`${menulist.size} menu-item`}>
                <div className='background-image'
                    style={{
                        backgroundImage: `url(${menulist.imageUrl})`
                    }}>
                    <div className='content'>
                        <Link to={`../MenuItem/Item?title=${menulist.title}`}>
                            <h1 className='title'>{menulist.title}</h1>
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route exact path={`/MenuItem/Item/?title`} element={<Item/>} />
                </Routes>
            </div>
        
    )
}


export default  (Menu);
