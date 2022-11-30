import { useState } from 'react';

const useUser = (token) => {

    const [CurrentUSer, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    const getAll = async () => {
        setLoading(true);
        const request = await fetch(`${baseUrl}/task`, { headers });
        const response = request.ok ? await request.json() : await request.text();

        setCurrentUser(response.CurrentUSer);
        setLoading(false);
    }

    const getOne = () => {

    }

    const createUser = async (CurrentUSer) => {
        const request = await fetch(`${baseUrl}/task`, { method: 'POST', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
        
        return response.CurrentUSer;
    }

    const removeUser = async (id) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const updateUSer = async (id, CurrentUSer) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'PUT', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }
    const loginUSer = async (id, CurrentUSer) => {
        const request = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", { method: 'POST', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }
    const logoutUSer = async (id, CurrentUSer) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'GET', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }
    return {
        CurrentUSer,
        setCurrentUser,
        loading,
        getAll,
        getOne,
        createUser,
        removeUser,
        updateUSer,
        loginUSer,
        logoutUSer
    };
}


export default useUser;