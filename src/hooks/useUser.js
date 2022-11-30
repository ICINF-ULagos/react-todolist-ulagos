import { useState } from 'react';

const useUser = (token) => {

    const [currentUser, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    const headersRegister = {
        'Content-Type': 'application/json',
    }
    const headersDel = {
        'Authorization': 'Bearer ' + token
    }

    const create = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', headersRegister, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        setLoading(false);

        return response.data;
    }

    const update = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/me`, { method: 'PUT', headers, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        setCurrentUser(response.data)
        setLoading(false);

        return response.data;
    }

    const remove = async () => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'DEL', headersDel });
        const response = request.ok ? await request.json() : await request.text();

        return response.data;
    }

    const login = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/login`, { method: 'POST', headersRegister, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        setCurrentUser(response.data)
        setLoading(false);

        return response.data;
    }

    const logout = async () => {
        const request = await fetch(`${baseUrl}/user/logout`, { method: 'POST', headersDel });
        const response = request.ok ? await request.json() : await request.text();

        return response.data;
    }


    return {
        currentUser,
        setCurrentUser,
        loading,
        create,
        update,
        remove,
        login,
        logout,
    };
}


export default useUser;