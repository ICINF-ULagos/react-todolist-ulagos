import React from "react";
import { useState, useEffect } from 'react'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Taskboard(){
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
        <div style={{ backgroundColor: 'white',margin:'12 px',border:'12px'}}>
           <h3 style={{color :'black'}}> Taskboard</h3>
                
                <div className='pendiente'>
                        <nav>
                            <a>Pendientes</a> 
                        </nav>
                        <div className='tareas_pendientes'> </div>
                    </div>
                    <div className='completadas'> 
                        <nav>
                            <a>Completadas</a> 
                        </nav>
                        <div className='tareas_completadas'></div>
                    </div>
                
            </div>
    );
}

export default Taskboard;