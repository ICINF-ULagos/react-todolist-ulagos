import { useState } from 'react';


const useUser = (token) => {

    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
    
    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    const headers2 = {
        'Authorization': 'Bearer ' + token
    }

    const headers3 = {
        'Content-Type': 'application/json'
    }

    const create = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', headers3, body: JSON.stringify(currentUser) });
        const response = request.ok? await request.json() : await request.text();
        setCurrentUser(response.data);
        setLoading(false)
    }
    const update = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/me`, { method: 'PUT', headers, body: JSON.stringify(currentUser) });
        const response = request.ok? await request.json() : await request.text();
        setCurrentUser(response.data);
        setLoading(false)
    }
    
    const delete_ = async () => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'DEL', headers2});
        const response = request.ok? await request.json() : await request.text();
        
    }
    
    const login = async (currentUser) => {
        setLoading(true)
        const request = await fetch(`${baseUrl}/user/me`, { method: 'POST', headers3, body: JSON.stringify(currentUser)});
        const response = request.ok? await request.json() : await request.text();
        setCurrentUser(response.data);
        setLoading(false)
    }

    const logout = async () => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'POST', headers2});
        const response = request.ok? await request.json() : await request.text();
    
    }

    return {
        loading,
        currentUser,
        setcurrentUser,
        create,
        update,
        delete_,
        login,
        logout
    };

}

export default useUser;