import { useState } from 'react';

const useTodoListApi = (token) => {

    const [data, setData] = useState([]);
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

        setData(response.data);
        setLoading(false);
    }

    const getOne = () => {

    }

    const create = () => {

    }

    const remove = async (id) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'DELETE', headers });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    const update = async (id, data) => {
        const request = await fetch(`${baseUrl}/task/${id}`, { method: 'PUT', headers, body: JSON.stringify(data) });
        const response = request.ok ? await request.json() : await request.text();
        console.log(response);
    }

    return {
        data,
        loading,
        getAll,
        getOne,
        create,
        remove,
        update
    };
}


export default useTodoListApi;