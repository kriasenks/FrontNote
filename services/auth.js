import axios from "axios";
import Cookies from "js-cookie";


const API_URL = "http://localhost:5163";

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Auth/login`, credentials, { withCredentials: true });
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
        var response = await axios.post(`${API_URL}/Auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true
        });
        Cookies.remove("jwt");
        return response.status;
    } catch (error) {
        console.log("Ошибка при выходе из системы: ", error);
        throw error;
    }
};