import { useState } from "react";


const useUser=(token)=>{

    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser]= useState([]);
    const [data, setData] = useState([]);


    const baseUrl = "https://api-nodejs-todolist.herokuapp.com";
    const headers = {
        'Content-Type': 'application/json',
    }
    const headers2 = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    const login = async(currentUser)=>{


        const request = await fetch(`${baseUrl}/user/login`, { method: "POST", body: JSON.stringify(currentUser), headers })
        const response = request.ok ? await response.json() : await response.text();
        if(response.ok){
            sessionStorage.setItem("user", JSON.stringify(response.user));
            sessionStorage.setItem("token", response.token);
        }
        
        return response.data;

    } 


    const logout = async(currentUser)=>{
        const request = await fetch(`${baseUrl}/user/logout`, { method: 'POST', headers2, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response)
    } 

    const createUser = async (currentUser) => {
        const request = await fetch(`${baseUrl}/user/register`, { method: 'POST', headers, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
        
        return response.data;
    }

    const update = async (currentUser) => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'PUT', headers, body: JSON.stringify(currentUser) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }
    const remove = async () => {
        const request = await fetch(`${baseUrl}/user/me`, { method: 'DELETE', headers2 });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    return {
        data,
        loading, 
        logout,
        login,
        createUser,
        remove,
        update
    };







}
export default useUser;