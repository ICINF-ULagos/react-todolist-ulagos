import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData); // PARSE JSON

            const headers = {
                'Content-Type': 'application/json',
            }
            const body = JSON.stringify(formValues)

            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", { method: "POST", body, headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            if (response.ok) {
                sessionStorage.setItem("user", JSON.stringify(responseBody.user));
                sessionStorage.setItem("token", responseBody.token);
                setMessage(null)
                navigate('/')
            } else {
                setMessage(responseBody)
            }

            console.log(responseBody)
        } catch (error) {
            console.error(error)
        }
    }

    return (<div>
        <form onSubmit={handlerSubmit}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Enviar</button>
        </form>

        {message && <p>{message}</p>}
    </div>)
}


export default Login;