const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI";

const upTask = async (id, comp) => {
    const body = JSON.stringify({
        "completed": comp,
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    const response = await fetch("https://api-nodejs-todolist.herokuapp.com/task/"+id, { method: "PUT", body, headers })
    const responseBody = response.ok ? await response.json() : await response.text();
    window.location.reload(false);
}

function simpleList({ data, label = "description" }) {

    return (
        <ul>
            {
                data.map(function (item, index) {
                    return (
                        <div className="todo-row">
                            <div>
                                <div class="dropdown">                                 
                                    <button className="itemButton">...</button>
                                    <div class="dropdown-content">
                                        <button onClick={function(){upTask(item._id, "false")}}>Pendiente</button>
                                        <button onClick={function(){upTask(item._id, "true")}}>Completado</button>
                                    </div>
                                </div>
                                <h1 className="titleTask">
                                    Tarea {index + 1}
                                </h1>
                                <li className="itemTask" key={index}>{item[label]}</li>
                            </div>
                            
                        </div>
                        
                    )
                })
            }
        </ul>
    )
}

export default simpleList;