import { useEffect } from 'react'
import TaskBoard from './components/Taskboard'
import UserBoard from './components/UserBoard'
import useTask from '../../hooks/useTask'
import useUser from '../../hooks/useUser'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"

function Home() {
    const { data: tasks, setData: setTasks, loading: loadingTasks, getAll: getAllTasks, create: createTask } = useTask(token);
    
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


function User() {
    const { data: User, setData: setUser, loading: loadingUser, getAll: getAllUser, create: createUser } = useUser(token);
    
    const submitUser = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData); // PARSE JSON

        const newUser = await createUser(formValues)

        setUser((prevState) => ([...prevState, newUser]))

        event.target.reset();
    }

    useEffect(() => {
        getAllUser()
    }, [])

    return (
        <>
            <header style={{ minHeight: '15rem' }} className="App-header">
                <p>
                    Home
                </p>
                <form style={{ display: 'flex', height: '30px' }} onSubmit={submitUser}>
                    <input type="text" name="description" />
                    <button type="submit">Nueva tarea</button>
                </form>
            </header>
            {
                loadingUser ? <p style={{ color: 'white' }}>Loading...</p>
                    : <UserBoard User={User} />}
        </>
    )
}
export default User;
