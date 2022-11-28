import { useState, useEffect } from 'react'

import { TaskCard } from '../../components/common'

const taskUrl = "https://api-nodejs-todolist.herokuapp.com/task"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch(taskUrl, { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasks(responseBody.data)
        })()
    }, []);

    return (
        <header className="App-header">
            <p>
                Task Board Hypercompumegared
            </p>
            
            <TaskCard data={tasks} token={token} taskUrl={taskUrl}/>
            <div style={{ display: 'flex' }}>

            </div>
        </header>
    )
}

export default Home;
