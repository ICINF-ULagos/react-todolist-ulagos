import { useEffect, useState } from 'react';
import TodoCard from '../../components/common/TodoCard/todoCard'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + token
}

const TaskBoard = () => {
  const [todoData, setTododata] = useState([])
  useEffect(() => {
    fetchTodoData()
  },)

  const fetchTodoData = async () => {

    const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task", { headers })
    const responseBody = response.ok ? await response.json() : await response.text();

    setTododata(responseBody.data)
  }
  

  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
      gridAutoRows: '10rem',
      gridGap: '4rem',
      padding: '2rem 6rem'
    }}>
    {
      todoData.map((item, index) => 
        <TodoCard 
          key={item._id}
          number={index}
          id={item._id}
          title={item.description}
          isDone={item.completed}
        />
      )
    }
    </main>
  )
}

export default TaskBoard
