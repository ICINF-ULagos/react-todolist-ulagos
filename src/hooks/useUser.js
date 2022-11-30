import { useState } from 'react';

const useUser = (token) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    const headerContent = {
        'Content-Type': 'application/json'
    }
    const headerAuthorization = {
        'Authorization': 'Bearer ' + token
    }

    const login = async (data) => {
        const response = await fetch(`${baseUrl}/user/login`, { method: "POST", data , headerContent })
        const responseBody = response.ok ? await response.json() : await response.text();

        return responseBody;
    }

    const logout = async (body) => {
        const response = await fetch(`${baseUrl}/user/logout`, { method: "POST", body, headers })
        const responseBody = response.ok ? await response.json() : await response.text();

        return responseBody;
    }


    const create = async (data) => {
        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', headerContent, body: JSON.stringify(data) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
        
        return response.data;
    }

    const remove = async (id) => {
        const request = await fetch(`${baseUrl}/user/${id}`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const update = async (id, data) => {
        const request = await fetch(`${baseUrl}/user/${id}`, { method: 'PUT', headers, body: JSON.stringify(data) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    return {
        login,
        logout,
        create,
        remove,
        update
    };
}


export default useUser;