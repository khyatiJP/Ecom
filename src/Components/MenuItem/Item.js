import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Directory } from "../Directory/Directory";
import './Itemstyle.scss'

export const Item = () => {
    const [imagelist, SetImage] = useState({data: []})
    let query = new URLSearchParams(useLocation().search);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=23641578-50aa901f76bb38046ae858bc9&q=${query.get("title")}&image_type=photo`)
            .then(response => response.json()
                .then(data => {                  
                    SetImage({data:data.hits})
                }));
    }, [])    
    return (
        <div >
            <Link to='/'>Back</Link>
            <div className='itemlist'>
                {imagelist.data.map((list) => {
                    return (<img src={list.previewURL} key={list.id}></img>)
                })}
            </div>
            <Routes>
                <Route exact path='/' element={<Directory />} />
            </Routes>
        </div>

    )

}