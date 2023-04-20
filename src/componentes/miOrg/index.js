import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    
    //const[nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("mostrar/ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }
    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Boton-add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg