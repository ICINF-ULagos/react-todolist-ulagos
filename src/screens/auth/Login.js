import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

function Login() {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const { login } = useUser();

    const handlerSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData); // PARSE JSON

            const result = await login(formValues);

            console.log(result)

            navigate('/')
        } catch (error) {
            console.info(error.message)
            console.error(error)
            setMessage(error.message)
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