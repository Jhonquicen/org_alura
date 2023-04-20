import { useState } from "react"
import "./texto.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...` //hacemos esta funcion y la concatenamos con `${}` para poner esos 3 puntos 

    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label> {/* titulo lo ponemos en formulario.js */} {/*toUpperCase() para poner en mayuscula*/}
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        /> {/*aca ponemos la funcion con la modificacion para que aparezcan los 3 puntos al final*/}
        {/*usamos required={props.required} para poner el requerido en el input que deseamos */}
    </div>
}

export default Campo