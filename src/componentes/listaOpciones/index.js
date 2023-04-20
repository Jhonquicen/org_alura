import "./listaOpciones.css"
const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })

    const manejarCambio = (e) => {
        console.log(e.target.value)
        props.setEquipo(e.target.value)
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((nombreEquipo, index) =>{
                return <option key={index} value={nombreEquipo}>{nombreEquipo}</option>
            }
            )}
            {/* <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option> */}
        </select>
    </div>

}
export default ListaOpciones