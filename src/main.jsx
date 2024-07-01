import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotesPage from '../pages/NotesPage';

const RedirectToLogin = () => <Navigate to="/login" />;

const root = createRoot(document.getElementById('root'));

root.render(
    <ChakraProvider>
        <Router>
            <Routes>
                <Route path="/" element={<RedirectToLogin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="*" element={<RedirectToLogin />} />
            </Routes>
        </Router>
    </ChakraProvider>
);