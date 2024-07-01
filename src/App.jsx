import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Login from '../pages/Login';

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-3xl font-bold">Добро пожаловать в SimpleTodo</h1>
            <Link to="/login">
                <Button colorScheme="teal">Вход</Button>
            </Link>
            <Link to="/register">
                <Button colorScheme="teal">Регистрация</Button>
            </Link>
        </div>
    );
};

export default App;