import React from 'react'
import './task.css'

function Taskboard({ data, label = "description" }){
  return (
    <div className='card'>
        <h1> task_board</h1>
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className='grid-container'>
            {
                data.map(function (item, index) {
                    return (
                        <div className='item1' key={index}>
                            <h1> Tarea {index}</h1>
                            <p className='card-description'>{item[label]}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>

    </div>
    
  )
}

export default Taskboard;