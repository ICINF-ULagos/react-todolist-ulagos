import { useState } from 'react'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + token
}

const TodoCard = ({number, id, title, isDone }) => {

  const [isCompleted, setIsCompleted] = useState(isDone)

  const handleComplete = async() => {
    const body = {
      "completed": !isCompleted
    }

    const response = await fetch(
      `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
      {method: 'PUT', headers, body: JSON.stringify(body)})
    const responseBody = response.ok ? await response.json() : await response.text();
    console.log(responseBody)

    setIsCompleted(!isCompleted)

  }

  const handleDelete = async () => {
    await fetch(
      `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
      { method: 'DELETE', headers }
    )
  }

  return (
    <section style={{ 
      border: 'solid 1px',
      borderRadius: '5px',
      opacity: isCompleted ? '55%' : '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
      
    }}>
      <h2> Tarea {number+1} </h2>
      <p> {title} </p>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
        <button onClick={ handleComplete } style={{ 
          backgroundColor: '#4CAF50',
          borderRadius: '6px',
          color: 'white',
          border: 'none',
          fontSize: '1rem',

        }}> Completar </button>

        <button onClick={ handleDelete } style={{ 
          backgroundColor: '#f44336',
          borderRadius: '6px',
          color: 'white',
          border: 'none',
          fontSize: '1rem'
        }}> Borrar </button>
      </div>
    </section>
  )
} 

export default TodoCard;
