import { useState } from 'react';

const useUser = (token) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    const header = {
        'Content-Type': 'application/json',
    }

    const create = async (data) => {

        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', header, body: JSON.stringify(data) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);

        return response.data;
    }

    const update = async (id, data) => {

        const request = await fetch(`${baseUrl}/user/${id}`, { method: 'PUT', headers, body: JSON.stringify(data) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);

    }

    const remove = async (id) => {

        const request = await fetch(`${baseUrl}/user/${id}`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);

    }

    const login = async (data) =>{

        const response = await fetch(`${baseUrl}/user/login`, { method: "POST", data, header })
        const responseBody = response.ok ? await response.json() : await response.text();

        return responseBody;

    }


    const logout = async () =>{

        const response = await fetch(`${baseUrl}/user/logout`, { method: "POST", headers })
        const responseBody = response.ok ? await response.json() : await response.text();
        
        console.log(responseBody)

    }



    return {
        data,
        setData,
        loading,
        create,
        remove,
        update,
        login,
        logout
    };
}


export default useUser;