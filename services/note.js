import axios from "axios";
import Cookies from "js-cookie";

export const fetchNotes = async(filter) => {
    try {
        const token = Cookies.get("jwt");
        console.log("token: ", token);
        var response = await axios.get("http://localhost:5163/Notes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true
        });
        return response.data.notes;
    } catch (e) {
        console.error("Ошибка", e);
    }
};

export const createNote = async(note) => {
    try {
        const token = Cookies.get("jwt");
        var response = await axios.post("http://localhost:5163/Notes", note, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true
        });
        return response.status;
    } catch (e) {
        console.error(e);
    }
};
