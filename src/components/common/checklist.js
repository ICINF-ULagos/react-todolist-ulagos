import React, { useState, useEffect } from 'react'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"
export default function Checklist({defaultChecked} = false,{ data, label = "description" } ) {
  const [checked, setChecked] = useState(defaultChecked); 
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        (async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task", { headers })
            const responseBody = response.ok ? await response.json() : await response.text();

            setTasks(responseBody.data)
        })()
    }, []);

  const updateTask = async (event) => {
    

   

    /* const body = JSON.stringify({
        iscompleted: formValues.iscompleted,
    }) */

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }

    /*c onst response = await fetch("https://api-nodejs-todolist.herokuapp.com/task/", { method: "PUT", body, headers }) */

    /* setTasks((prevState) => ([...prevState, responseBody.data])) */

   
}


  return (


    <div className="checks">
      
          <label for="cars"></label>
          
          <div className='caja'>
          <select name="cars" id="cars" className='' onClick={updateTask}>
            <option value="" ></option>
            <option value="completed">Completado</option>
            <option value="nocompleted">No completado</option> 
          </select>
      </div>


      {!checked && (
      <div className="checkbox unchecked">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/></svg>

      </div>
      )}

      {checked && (
      <div className="checkbox checked">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

      </div>
      )}
     

    </div>
  )
}

