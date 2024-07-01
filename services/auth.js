import axios from "axios";
import Cookies from "js-cookie";


const API_URL = "http://localhost:5163";
export const login = async (credentials) => 
{
    try {
        const response = await axios.post(`${API_URL}/Auth/login`, credentials);
        console.log("токен после запроса на сервер: ", response.data.token);
        localStorage.setItem("jwt", response.data.token);
        console.log("токен после сохранения в куки: ", localStorage.getItem("jwt"));
        return response.data;
    } catch(error) {
        console.log("Ошибка авторизации: ", error);
        throw error;
    }
};

export const register = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/register`, credentials);
        console.log("данные ответа регистрации: ", response);
        return response.data;
    } catch (error) {
        console.log("Ошибка регистрации: ", error);
        throw error;
    }
};

export const logout = () => {
    Cookies.remove("jwt");
};