import TodoCard from '../../../components/common/TodoCard/TodoCard'

const TaskBoard = ({ tasks }) => {
  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
      gridAutoRows: '10rem',
      gridGap: '4rem',
      padding: '2rem 6rem'
    }}>
      {
        tasks.map((item, index) =>
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
