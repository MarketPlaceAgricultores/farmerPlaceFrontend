import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from './App'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';
import Products from './components/products/Products';

export default function Router(){
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/main'} element={<App />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/products'} element={<Products />} />
        </Routes>
    )
}