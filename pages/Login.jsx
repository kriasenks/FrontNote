import React, { useState } from 'react';
import { Button, Input, Box, Heading, VStack, Text } from "@chakra-ui/react";
import { login } from "../services/auth";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials);
            navigate('/notes');
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bg="gray.100"
        >
            <Box
                as="form"
                onSubmit={handleSubmit}
                bg="white"
                p={8}
                rounded="md"
                shadow="dark-lg"
                w="full"
                maxW="md"
            >
                <VStack spacing={4}>
                    <Heading as="h3" size="lg" textAlign="center">
                        Вход
                    </Heading>
                    {error && (
                        <Text color="red.500" textAlign="center">
                            {error}
                        </Text>
                    )}
                    <Input
                        placeholder="Имя пользователя"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                    <Button type="submit" colorScheme="blue" size="lg" w="full">
                        Войти
                    </Button>
                    <Link to="/register">
                        <Button colorScheme="gray" variant="link" size="sm">
                            Нет аккаунта? Регистрация
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Box>
    );
};
export default Login;