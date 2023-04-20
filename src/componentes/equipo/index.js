import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    // Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={ obj}>
                <input
                    type='color'
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={ estiloTitulo }>{titulo}</h3> {/* sin destructuracion queda asi <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>*/}
                <div className="colaboradores">
                    {
                        colaboradores.map((cadaColaborador,index) => <Colaborador 
                        datos={cadaColaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    } {/*por cadaColaborador que ingrese a colaboradores me haga un nuevo componente en este caso Colaborador con los datos,key,colorPrimario */}

                </div>
            </section>
        }
    </>
}

export default Equipo