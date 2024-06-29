// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/payment';
import OrderConfirmation from './pages/OrderConfirmation';
import ItemDetails from './pages/ItemDetails';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment/:id" element={<Payment />} />
                <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
                <Route path="/item/:id" element={<ItemDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
