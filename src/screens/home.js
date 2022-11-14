import { useState, useEffect } from 'react'

import logo from '../logo.svg';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task", { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasks(responseBody.data)
        })()
    }, []);

    const submitTask = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData); // PARSE JSON

        const body = JSON.stringify({
            description: formValues.description,
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task", { method: "POST", body, headers })
        const responseBody = response.ok ? await response.json() : await response.text();

        setTasks((prevState) => ([...prevState, responseBody.data]))

        event.target.reset();
    }

    return (
        <header className="App-header">
            <p>
                Home
            </p>
            <form style={{ display: 'flex', height: '30px' }} onSubmit={submitTask}>
                <input type="text" name="description" />
                <button type="submit">Nueva tarea</button>
            </form>

            <ul>
                {
                    tasks.map(function (task, index) {
                        return (
                            <li key={index}>{task.description}</li>
                        )
                    })
                }
            </ul>
            <div style={{ display: 'flex' }}>

            </div>
        </header>
    )
}

export default Home;