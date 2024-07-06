import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';


const API_URL = "http://localhost:5163";

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/login`, credentials, { withCredentials: true });
        console.log("Токен после получения с сервера: ", response.data);
        //Cookies.set("jwt", response.data.token);
        return response.data;
    } catch (error) {
        console.log("Ошибка авторизации: ", error);
        throw error;
    }
};

export const register = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/register`, credentials);
        return response.data;
    } catch (error) {
        console.log("Ошибка регистрации: ", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const token = Cookies.get("jwt");
        console.log("Токен после получения из куки до выхода: ", token);
        var response = await axios.post(`${API_URL}/Auth/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            });
        Cookies.remove("jwt");
        console.log("ответ от сервера: ", response.status);
        return response.status;
    } catch (error) {
        console.log("Ошибка при выходе из системы: ", error);
        throw error;
    }
};