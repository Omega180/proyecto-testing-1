import React, {useState} from "react"
import "./App.css"
import ComponenteSeleccionado from "./components/ComponenteSeleccionado.jsx"
import EditarCurso from "./components/EditarCurso.jsx"
import ListasDeConsultas from "./components/ListasDeConsultas"

const componentes = [
	{label: "Seleccione que desea ingresar", value: "componenteNulo"},
	{label: "Curso", value: "componenteCurso"},
	{label: "Alumno", value: "componenteAlumno"},
	{label: "Profesor", value: "componenteProfesor"},
]

function App() {
	const [data, setData] = React.useState(null)
	
	React.useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setData(data.message))
	}, [])
	
	const [seleccion, setSeleccion] = useState([])
	const manejarCambio = (componentes) => {
		setSeleccion(componentes.target.value)
	}

	return (
		<div className="App-principal">
			<div className="contenedor">
				<div className="seleccionContenedor">
					<h1 className="seleccionTitulo">
						Por favor seleccione que desea ingresar
					</h1>
					<div className="seleccionOpcion">
						<select
							value={seleccion}
							onChange={manejarCambio}
							className="seleccionComponente"
							name="eleccion"
							id="eleccion"
						>
							{componentes.map((componente) => (
								<option value={componente.value}>{componente.label}</option>
							))}
						</select>
					</div>
					<p className="seleccionEstado">{!data ? "Loading..." : data}</p>
					<ComponenteSeleccionado seleccion={seleccion} />
				</div>
				<EditarCurso />
				<ListasDeConsultas />
			</div>
		</div>
	)
}

export default App
