function simpleList({ data, label = "description" }) {

    return (
        <ul>
            <h1>Listado de Tareas</h1>
            <div clasName="listado">
            {
                data.map(function (item, index) {
                    return (
                        <div className="card" key={index}>
                            <div>{item[label]}</div>
                        </div>
                    )
                })
            }
            </div>
        </ul>
    )
}

export default simpleList;