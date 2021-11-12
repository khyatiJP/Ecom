import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './menu.scss'
import { Item } from '../MenuItem/Item'

const Menu = ({ menulist }) => {


    return (
        <BrowserRouter>
            <div className={`${menulist.size} menu-item`}>
                <div className='background-image'
                    style={{
                        backgroundImage: `url(${menulist.imageUrl})`
                    }}>
                    <div className='content'>
                        <Link to={`../MenuItem/Item/${menulist.title}`}>
                            <h1 className='title'>{menulist.title}</h1>
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route exact path={`/MenuItem/Item/${menulist.title}`} element={<Item/>} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}


export default Menu;
