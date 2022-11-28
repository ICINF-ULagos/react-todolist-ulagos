import React, { useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"

function TaskBoard({ data, label = "description"}) {

    return (
        <div style={{ backgroundColor: "white", margin: "10px", border:"10px"}}>
            <h3 style={{ color: "black"}}>task_board completed</h3>
                {
                data.map(function (item, index) {
                    if (data[index].completed){
                        return (
                            <div  style={{ 
                                    backgroundColor: "yellow", 
                                    width:"300px",
                                    margin: "20px",
                                    display: "inline-block"
                            }}>
                                <div  style={{color:"black", display: "flex",justifyContent: "flex-end",}}>
                                    <select key={index} style={{ 
                                    backgroundColor: data[index].completed ? 'green':'red'}}id={index} onChange={(event)=>(data[index].completed=event.target.value)}>\
                                        <option hidden selected>Selecciona una opción</option>
                                        <option value={true}>Completed</option>
                                        <option value={false}>Incompleted</option>
                                        
                                    </select>
                
                                </div>
                                <h3 style={{ color:"black"}}>Tarea {index + 1}</h3>
                                <p key={index} style={{ color:"black"}} >{item[label]}</p>
                            </div>
                    )
                    }
                    else
                        return
                    
                })     
                }
                <h3 style={{ color: "black"}}>task_board Incompleted</h3>
                {
                data.map(function (item, index) {
                    if (!data[index].completed){
                        return (
                            
                            <div  style={{ 
                                    backgroundColor: "yellow", 
                                    width:"300px",
                                    margin: "20px",
                                    display: "inline-block"
                            }}>
                                <div  style={{color:"black", display: "flex",justifyContent: "flex-end",}}>
                                    <select key={index} style={{ 
                                    backgroundColor: data[index].completed ? 'green':'red'}}id={index} onChange={(event)=>(data[index].completed=event.target.value)}>\
                                        <option hidden selected>Selecciona una opción</option>
                                        <option value={true}>Completed</option>
                                        <option value={false}>Incompleted</option>
                                        
                                    </select>
                
                                </div>
                                <h3 style={{ color:"black"}}>Tarea {index + 1}</h3>
                                <p key={index} style={{ color:"black"}} >{item[label]}</p>
                            </div>
                            
                        )
                }  
                })     
                }
        </div>
        
    )

}

export default TaskBoard;