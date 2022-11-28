function taskCard({ data, token, taskUrl, label = "description" }) {

    const NoCompleteTask = async (id) => {
        const body = JSON.stringify({
            completed: "false",
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        await fetch(taskUrl + "/" + id, { method: "PUT", body, headers })
    }

    const CompleteTask = async (id) => {
        const body = JSON.stringify({
            completed: "true",
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }

        await fetch(taskUrl + "/" + id, { method: "PUT", body, headers })
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,2fr)',
            justifyContent: 'center',
            border: '2px solid gray',
            width: '1000px 2000px',
            padding: '10px',
        }}>
            {
                data.map(function(item, index) {
                    return (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '2px solid gray',
                            alignItems: 'center',
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginTop: '10px',
                            marginBottom: '10px',

                        }}>
                            <p key={index}>{item[label]}</p>
                            <button className="dropdown" style={{
                                position: 'relative',
                                bottom: '40px',
                                backgroundColor: 'transparent',
                                color: 'white',
                            }}>...
                                <div className="dropdown-content">
                                    <a onClick={() => NoCompleteTask(item._id)}>No Completado</a>
                                    <a onClick={() => CompleteTask(item._id)}>Completado</a>
                                </div>

                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default taskCard;
