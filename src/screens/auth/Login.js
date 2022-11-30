import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handlerSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>


        {message && <p>{message}</p>}
    </div>)
}


export default Login;