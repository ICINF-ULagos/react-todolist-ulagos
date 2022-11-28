import { useState, useEffect } from 'react'
//import { GenericList } from '../../components/common'
import { GenericList, Column } from '../../components/common'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Taskboard() {
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

    const [taskscompleted, setTasksCompleted] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task?completed=true", { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasksCompleted(responseBody.data)
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
        
        <div className="App-header">
            <h1>
                To Do App
            </h1>
            <form onSubmit={submitTask}>
                <input
                    placeholder='Agregar nueva tarea'
                    type="text" 
                    name="description" 
                    className='todo-input'
                />
                <button type="submit" className="todo-button">Agregar</button>
            </form>

            <div className='todo-container'>
                <Column className='todo-container-no-comp'colTitle='Pendiente' data={tasks}/>
                <Column className='todo-container-comp' colTitle='Completado' data={taskscompleted}/>
            </div>
    
        </div>
    )
}

//<GenericList data={tasks}/>
export default Taskboard;