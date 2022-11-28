const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY";

const upTask = async (id) => {
    const body = JSON.stringify({
        "completed": true,
    })
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    await fetch("https://api-nodejs-todolist.herokuapp.com/task/"+id, { method: "PUT", body, headers })
}

function simpleList({ data, label = "description" }) {

    return (
        <ul>
            {
                data.map(function (item, index) {
                    return (
                        <div className="todo-row">
                            <div class="dropdown">
                                <button className="itemButton">...</button>
                                <div class="dropdown-content">
                                    <a onClick={function(){upTask(item._id)}}>Pendiente</a>
                                    <a onClick={function(){upTask(item._id)}}>Completado</a>
                                </div>
                            </div>
                            <h1 className="titleTask">
                                Tarea {index + 1}
                            </h1>
                            <li className="itemTask" key={index}>{item[label]}</li>
                        </div>
                        
                    )
                })
            }
        </ul>
    )
}

export default simpleList;