import { useState } from "react"
import "./formulario.css"
import Campo from "../Texto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar el envio")//usamos esta funcion para que no se reinicie y lo mandamos al form
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    } //para que no se borre cuando envie los datos

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


    return <section className="formulario">     
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre"
                required={true} valor={nombre} setValor={setNombre} />{/* traemos el required de index.js para ponerlo en el input que deseamos en este caso para los 3*/}
            <Campo titulo="Puesto" placeholder="Ingresar nuesto"
                required valor={puesto} setValor={setPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto"
                required valor={foto} setValor={setFoto} />
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos}/>
            <Boton>{/* otra forma y en el componente boton.js colocamos {props.children}*/}
                Crear
            </Boton> {/*ponemos poner otras etiquetas dentro como <img src="/.....">*/}

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                setValor={setTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario