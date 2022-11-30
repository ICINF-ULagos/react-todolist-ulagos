import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import  useUser from "../../hooks/useUser"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"


function Login() {

    const {login} = useUser(token);

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData); // PARSE JSON

            const body = JSON.stringify(formValues)
            
            await login(body);
        
            
            

            
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