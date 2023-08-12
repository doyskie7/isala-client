import React from "react"
import { Routes, Route } from 'react-router-dom';
import { Admin } from "../pages/Admin/Main";


export const PrivateRoutes = () =>{

    return (
        <Routes>
            <Route path="/admin" index element ={<Admin/>}/>
        </Routes>
    )
}