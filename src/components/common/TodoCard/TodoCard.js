import { useState } from 'react'
import useTask from '../../../hooks/useTask'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

const TodoCard = ({number, id, title, isDone }) => {

  const { update, remove } = useTask(token);

  const [isCompleted, setIsCompleted] = useState(isDone)

  const handleComplete = async() => {
    const body = {
      "completed": !isCompleted
    }

    await update(id, body);

    setIsCompleted(!isCompleted)
  }

  const handleDelete = async () => {
    await remove(id);
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
          cursor: 'pointer'

        }}> Completar </button>

        <button onClick={ handleDelete } style={{ 
          backgroundColor: '#f44336',
          borderRadius: '6px',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer'
        }}> Borrar </button>
      </div>
    </section>
  )
} 

export default TodoCard;
