function Taskboard({ data, label = "description" }) {
    return (
        <ul>
            <h1>Listado de Tareas</h1>
            <div class="listado">
            {
                data.map(function (item, index) {
                return (
                    <div className="card" key={index}>
                    <div className="titulo tarea"><h3>Tarea</h3></div>
                    <div>{item[label]}</div>
                    <div class="dropdown">
                        <button class="dropbtn">- - -
                        </button>
                        <div class="dropdown-content" id="myDropdown">
                            <a href="#">Completado</a>
                            <a href="#">No Completado</a>
                        </div>
                        </div> 
                    </div>
                    )
                })
            }
            </div>
        </ul>
    )
}

export default Taskboard;