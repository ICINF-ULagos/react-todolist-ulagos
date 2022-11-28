import React,{useState, useRef} from 'react'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"



const updateTask = async (id) => {
    const body = JSON.stringify({
        completed: "true",
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    await fetch("https://api-nodejs-todolist.herokuapp.com/task/"+id, { method: "PUT", body, headers })
}





function SimpleList({ data, label = "description" }) {
    const [modal_hidden, setHidden] = useState(true)
    const nameModal = useRef([])
    const modal_escondido = (i) =>{
        setHidden(!modal_hidden)
        nameModal.current[i].hidden = !nameModal.current[i].hidden
    }

    const comp_pen = (i, item) => {
        if(nameModal.current[i].value === "Completado"){
            console.log(nameModal.current[i].value)
            updateTask(item._id)
            console.log(item)
        }
        else{
            console.log(item)
        }
    }
    return (
        <ul>
            {
                data.map(function (item, index) {
                    return (
                        <div className="contenedor_estilo_tareas">
                            <div className='contenedor_modal'>
                                <select className="modal" ref={(element) => {nameModal.current[index] = element}} hidden="true" onClick={() =>{comp_pen(index, item)}}>
                                    <option value={"Completado"} className='modal_completado'>Completado</option>
                                    <option value={"Pendiente"} className='modal_pendiente'>Pendiente</option>
                                </select>
                            </div>
                            <div className="estilo_tareas">
                                <nav>
                                    <button className="boton_tareas" id={"Tarea_"+(index+1)} onClick={() => {modal_escondido(index)}}><div className="dots">. . .</div></button>
                                </nav>
                                <div className="contenedor_titulo_tareas">
                                    <span className="titulo_tareas">Tarea {index+1}</span>
                                </div>
                                    <li key={index}>{item[label]}</li>
                            </div>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default SimpleList;