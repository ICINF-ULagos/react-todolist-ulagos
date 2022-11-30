import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useUser from '../../hooks/useUser'


function Login() {


    const { login: LoginUser} = useUser();
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
 
    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData); // PARSE JSON

            //const headers = {
            //    'Content-Type': 'application/json',
            //}
            const newLogin = await LoginUser(formValues)

            //const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", { method: "POST", body, headers })
            //const responseBody = response.ok ? await response.json() : await response.text();
            
            if (newLogin) {
                //sessionStorage.setItem("user", JSON.stringify(responseBody.user));
                //sessionStorage.setItem("token", responseBody.token);
                setMessage(null)
                navigate('/')
            } else {
                setMessage(newLogin)
            }

            console.log(newLogin)
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