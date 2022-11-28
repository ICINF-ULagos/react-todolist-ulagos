import { useState } from "react";
import Checklist from "../../components/common/checklist";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Taskboard({ data, label = "description", complet= "completed" }){


    
   
const updateTask= async function(id, dato){

        const body = JSON.stringify({
            completed: dato,
        })
        console.log(body)
    
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    
        await fetch("https://api-nodejs-todolist.herokuapp.com/task/"+id, { method: "PUT", body, headers })
        
    }


    return (
        <ul>
            <h5>Tabla de Tareas</h5>
            <div className="prueba">

            {
                data.map(function (item, index) {
                    return (
                        
                            <div className="card" key={item._id}>
                                    <h5 style={{margin: '12px'}}>tarea:{index+1}</h5>
                                    <p key={index}>{item[label]}</p>
                                    
                                    <button className="more-option"></button>
                                    <nav className="menu">
                                        <button onClick={() => updateTask(item._id, false)}>Not completed</button>
                                        <button onClick={() => updateTask(item._id, true)}>Completed</button>
                                    </nav>        
                            </div>        
                           
                      
                    )
                })
            }
            </div>
        </ul>
    )
}

export default Taskboard;