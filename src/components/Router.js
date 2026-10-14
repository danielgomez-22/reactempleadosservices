import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'


export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    {/* <Route path="/oficios/:idoficio" element={<DoctoresElement/>}/> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
