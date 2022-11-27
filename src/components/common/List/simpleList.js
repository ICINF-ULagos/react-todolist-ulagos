
function simpleList({ data, label = "description" }) {

    return (
        <ul>
            {
                data.map(function (item, index) {
                    return (
                        <div className="contenedor_estilo_tareas">
                            <div className="estilo_tareas">
                                <nav>
                                    <button className="boton_tareas"><div className="dots" id={"Tarea_"+(index+1)}>. . .</div></button>
                                </nav>
                                <div className="contenedor_titulo_tareas">
                                    <span className="titulo_tareas">Tarea {index+1}</span>
                                </div>
                                    <li key={index}>{item[label]}</li>
                            </div>
                        </div>
                        
                        
                    )
                })
            }
        </ul>
    )
}

export default simpleList;