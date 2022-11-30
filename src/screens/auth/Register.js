import { useRef } from 'react'
import useUser from '../../hooks/useUser';


function Register() {
  const {isLoading } = useUser()

  const nameRefi = useRef()
  const emailRefi = useRef()
  const passRefi = useRef()
  const ageRefi = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ padding: "5rem 5rem", width: "20rem"}}>
      <h1> Register </h1>
      <form style={{
        display: "flex",
        flexDirection: "column",
        }} onSubmit={ handleSubmit }>
        <input ref={nameRefi} placeholder="John Doe"/>
        <input ref={emailRefi} type="email" placeholder="john@doe.con"/>
        <input ref={passRefi} type="password" placeholder="password"/>
        <input ref={ageRefi} type="number" min="12" placeholder="69"/>
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