import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { Directory } from "../Directory/Directory";
import './Itemstyle.scss'
import { Row, Col, Button } from 'antd';

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
        <div>
        
        <Row gutter={[16, 24]}>    
                {imagelist.data.map((list) => {
                    return ( <div><Col className="gutter-row" span={3}> 
                    <img className='imgList' src={list.previewURL} key={list.id} alt={list.id}></img> 
                    <div className='ShopDiv'><Button type="link">Shop Now</Button></div>
                    </Col></div>  )
                })}
                
            <Routes>
                <Route exact path='/' element={<Directory />} />
            </Routes>
           
           
           
        </Row>
    </div> 
    )

}