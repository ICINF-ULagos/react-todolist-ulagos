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

    const removeUser = async (CurrentUSer) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const updateUSer = async (id, CurrentUSer) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'PUT', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }
    const loginUSer = async(CurrentUSer)=>{


        const request = await fetch(`${baseUrl}/task/${id}`, { method: "POST", body: JSON.stringify(CurrentUSer), headers })
        const response = request.ok ? await response.json() : await response.text();
        if(response.ok){
            sessionStorage.setItem("user", JSON.stringify(response.user));
            sessionStorage.setItem("token", response.token);
        }
        
        return response.data;

    } 
    const logoutUSer = async(CurrentUSer)=>{
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'POST', headers, body: JSON.stringify(CurrentUSer) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response)
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