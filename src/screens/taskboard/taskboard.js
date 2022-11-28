import { useEffect, useState } from 'react';
import TodoCard from '../../components/common/TodoCard/todoCard'

import useTodoListApi from '../../hooks/useTodoListApi'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"


const TaskBoard = () => {
  const { data: todoData, loading: loadingTodoTask, getAll: getAllTodoTask } = useTodoListApi(token);

  useEffect(() => {
    getAllTodoTask()
  },[])

  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
      gridAutoRows: '10rem',
      gridGap: '4rem',
      padding: '2rem 6rem'
    }}>
      {
        loadingTodoTask ? <p style={{ color: 'white' }}>Loading...</p> :
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
