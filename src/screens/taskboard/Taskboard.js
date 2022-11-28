import { useState, useEffect } from 'react'
import { GenericList} from '../../components/common'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"




function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task?completed=false", { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasks(responseBody.data)
        })()
    }, []);

    const [tasks_C, setTasks_C] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task?completed=true", { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasks_C(responseBody.data)
        })()
    }, []);

    return (
        <div className='center_class'>
            <div className='task_board'>
                <nav>
                    <p>task_board</p> 
                </nav>
                <div className='completada_pendiente'>
                    <div className='pendientes'>
                        <nav>
                            <p>Pendientes</p> 
                        </nav>
                        <div className='tareas_pendientes'>
                            <GenericList data={tasks}/>
                        </div>
                    </div>
                    <div className='completadas'> 
                        <nav>
                            <p>Completadas</p> 
                        </nav>
                        <div className='tareas_completadas'>
                            <GenericList data={tasks_C}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;