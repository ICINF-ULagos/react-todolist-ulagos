import { useState,useEffect } from 'react'
import { GenericList } from '../../components/common'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Taskboard2(){
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
    return (
        <header className="App-header">
            <div className='container'>
                <div className='upper'>
                    task_board
                </div>
                <div className='pendientes'>
                    <div className='upper'>
                        pendientes
                    </div>
                    <GenericList variant='card' data={tasks}/>
                </div>
                <div className='completadas'>
                    <div className='upper'>
                        completadas
                    </div>
                    <GenericList variant='card' data={tasks}/>
                </div>
            </div>
        </header>
    )
}
export default Taskboard2;