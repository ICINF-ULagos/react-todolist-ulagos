import{useRef} from 'react'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcyYWQ3OTAxNWRiMjAwMTc1NGEwZDkiLCJpYXQiOjE2Njg0NjQ0MjV9.YDKiwb-kpBYZ7FqOsJFWwaf35DVZO597NfBfB4YstbI"
function CardList({ data, label = "description"}) {
    const nameTask = useRef([])
    
    const UpdateTask = async (id) => {
        const body = JSON.stringify({
            completed: "true",
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        await fetch("https://api-nodejs-todolist.herokuapp.com/task/"+id, { method: "PUT", body, headers })
    }
    const search = (i, item) => {

        if(nameTask.current[i].value === "completed"){
            UpdateTask(item._id)
            console.log(item)
        }
    }
    return (
        data.map(function (item, index) {
                    return (
                        <div className="card" key={index}>
                            <h2>
                                Tarea {index+1}
                            </h2>
                            <p>
                                {item[label]}
                            </p>
                        <button class="more-option"></button>
                            <nav class="menu">
                                <select ref={(element)=>{nameTask.current[index] = element}} onClick={()=>{search(index,item)}}>
                                    <option value={"not completed"}>no completado</option>
                                    <option value={"completed"}>completado</option>
                                </select>
                            </nav>
                        </div>
                    )
                })
    )
}

export default CardList;