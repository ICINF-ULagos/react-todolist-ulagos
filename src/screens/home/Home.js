import { useEffect } from 'react'
import TaskBoard from './components/Taskboard'
import useTodoListApi from '../../hooks/useTodoListApi'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Home() {
    const { data: tasks, setData: setTasks, loading: loadingTasks, getAll: getAllTasks, create: createTask } = useTodoListApi(token);

    const submitTask = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData); // PARSE JSON

        const newTask = await createTask(formValues)

        setTasks((prevState) => ([...prevState, newTask]))

        event.target.reset();
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return (
        <>
            <header style={{ minHeight: '15rem' }} className="App-header">
                <p>
                    Home
                </p>
                <form style={{ display: 'flex', height: '30px' }} onSubmit={submitTask}>
                    <input type="text" name="description" />
                    <button type="submit">Nueva tarea</button>
                </form>
            </header>
            {
                loadingTasks ? <p style={{ color: 'white' }}>Loading...</p>
                    : <TaskBoard tasks={tasks} />}
        </>
    )
}

export default Home;
