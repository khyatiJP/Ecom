import React, { useEffect, useState } from "react";
import Menu from '../../components/Menu/Menu'
import './LandingStyle.scss'
import fetchCategory from './Action-landing'
import { useDispatch, useSelector, connect } from "react-redux";
import { Row } from 'antd';

export const Landing = () => {
    
    var dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory())

    }, [])
   const  items = useSelector((state) => state.landingimg) 
    return (
        <Row>
            <div className='directory-menu'>
                {
                    (items) ?
                        items.map((list) => {
                            return <Menu menulist={list} key={list.id} />

                        }) : ''
                }

            </div>
        </Row>

    )

}

///