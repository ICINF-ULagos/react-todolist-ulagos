function Taskboard({ data, label = "description" }) {

    return (
        <ul>
            <h5>Taskboard de TAreas</h5>
            <div className="prueba">
            
            {
                data.map(function (item, index) {
                    return (
                        
                        <div className="card" key={index} >
                            <div >{item[label]}</div>
                        </div>
                    )
                })
            }
            </div>
        </ul>
    )
}

export default Taskboard;