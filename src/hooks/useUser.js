import { useState } from 'react';


const useUser = () => {
  const [isLoading, setIsLoading] = useState(false)

  const baseUrl = "https://api-nodejs-todolist.herokuapp.com/user";
  const headers = {
    'Content-Type': 'application/json',
  }

  const create = async (userData) => {
    // Data validation
    if (!userData.name) return
    if (!userData.email) return
    if (!userData.age) return
    if (!userData.password) return

    // Actual implementation
    setIsLoading(true)
    const rawData = JSON.stringify(userData)

    try {
      const req = await fetch(`${baseUrl}/resgister`, { method: 'POST', headers, body: rawData})
      const res = req.ok ? await req.json() : await req.text();
      console.log(res.json());
      
    } catch (err) {
      console.error(err)
    }

    setIsLoading(false)
  }

  const login = async (loginData) => {
    // Data validation
    if (!loginData.email) return
    if (!loginData.password) return

    // Actual validation
    setIsLoading(true)
    const rawData = JSON.stringify(loginData)

    try {
      const req = await fetch(`${baseUrl}/login`, { method: 'POST', headers, body: rawData})
      const res = req.ok ? await req.json() : await req.text();
      console.log(res)
      
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async (token) => {
    // Data validation
    if (!token) return

    // Actual implementation
    setIsLoading(true)
    const headers = { ...headers, Authorization: `Bearer ${token}`}

    try {
      const req = await fetch(`${baseUrl}/logout`, { method: 'POST', headers })
      const res = req.ok ? await req.json() : await req.text()
      console.log(res)
      
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  const update = async (userData) => {
    // Data validation
    if (!userData.age) return
    if (!userData.token) return

    // Actual implementation
    setIsLoading(true)
    const headers = { ...headers, Authorization: `Bearer ${userData.token}`}
    const rawData = JSON.stringify(userData.age)

    try {
      const req = await fetch(`${baseUrl}/me`, { method: 'PUT', headers, body: rawData })
      const res = req.ok ? await req.json() : await req.text()
      console.log(res)
      
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  const remove = async (token) => {
    // Data validation
    if (!token) return


    // Actual implementation
    setIsLoading(true)
    const header = { Authorization: `Bearer ${token}` }

    try {
      const req = await fetch(`${baseUrl}/me`, { method: 'DELETE', headers: header})
      const res = req.ok ? req.json() : await req.text()
      console.log(res)
      
    } catch (error) {
      console.error(error)
      
    }
    setIsLoading(false)
  }

  return {
    create,
    login,
    logout,
    update,
    remove,
    isLoading
  }
}

export default useUser;
