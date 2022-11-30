import { useRef } from 'react'
import useUser from '../../hooks/useUser';


function Register() {
  const { create, isLoading } = useUser()

  const nameRef = useRef()
  const emailRef = useRef()
  const passRef = useRef()
  const ageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const testing = create({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
      age: ageRef.current.value
    })
  }

  return (
    <div style={{ padding: "5rem 5rem", width: "20rem"}}>
      <h1> Register </h1>
      <form style={{
        display: "flex",
        flexDirection: "column",
        }} onSubmit={ handleSubmit }>
        <input ref={nameRef} placeholder="John Doe"/>
        <input ref={emailRef} type="email" placeholder="john@doe.con"/>
        <input ref={passRef} type="password" placeholder="password"/>
        <input ref={ageRef} type="number" min="12" placeholder="69"/>
        <button style={{
          width: "10rem",
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          textDecoration: "none",
          textAlign: "center"
        }}> Registrarse! </button>
      </form>
        { isLoading && <p>Some Spinner</p>}
    </div>
  )
}


export default Register;