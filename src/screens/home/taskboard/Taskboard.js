import React, { useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"


function Taskboard({ data, label = "description", isCompleted=true}){
    const [Completed, setCompleted]=useState(isCompleted)
    const [drop, setDrop]=useState(false)
    const down=()=>{
        setDrop(!drop)
    }
    const a=()=>{
        setCompleted(false)
    }
    return (
        <div style={{backgroundColor: "white",
                    margin: "15px", border: "12px"}}>
            <h3 style={{color: "black",
                        borderColor:"red"}}>task_board</h3>
            {
            data.map(function (item, index) {
                    return (
                        <div style={{
                            backgroundColor: "yellow", width: "250px", margin: "20px", display: "inline-block"}}>
                            <div display={{
                                color:"black",
                                display:"flex",
                                justifyContent:"flex-end"
                            }}>
                                <Dropdown isOpen={drop} toogle={down} >
                                <DropdownToggle style={{ color:Completed ? "green":"red"}}>
                                    {Completed ? 'Completed' : 'Not Completed'}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={()=>a()}>
                                        Not Completed
                                    </DropdownItem>
                                    <DropdownItem onClick={()=>{setCompleted(false)}}>
                                        Completed
                                    </DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    )
                        })
                    }
            </div>) 
    
}

export default Taskboard;

