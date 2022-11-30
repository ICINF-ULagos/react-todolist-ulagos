import TodoCardU from '../../../components/common/TodoCard/TodoCardU'

const UserBoard = ({ user }) => {
  return (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
      gridAutoRows: '10rem',
      gridGap: '4rem',
      padding: '2rem 6rem'
    }}>
      {
        user.map((item, index) =>
          <TodoCardU
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

export default UserBoard
