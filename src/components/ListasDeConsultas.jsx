import React, {useState, useEffect} from "react"
import "../stylesheets/ListasDeConsultas.css"
import Axios from "axios"
function ListasDeConsultas(props) {
	const [alumnoLista, setAlumnoLista] = useState([])
	const [cursoLista, setCursoLista] = useState([])
	const [profesorLista, setProfesorLista] = useState([])
	const [cursoCompletolista, setCursoCompletoLista] = useState([])

	/* useEffect se trae los datos 1 vez, en el momento que se carga la pagina web */
	useEffect(() => {
		Axios.get("http://localhost:3001/api/getAlumnos").then((response) => {
			setAlumnoLista(response.data)
		})
		Axios.get("http://localhost:3001/api/getCursos").then((response) => {
			setCursoLista(response.data)
		})
		Axios.get("http://localhost:3001/api/getProfesor").then((response) => {
			setProfesorLista(response.data)
		})
		Axios.get("http://localhost:3001/api/getCursosCompletos").then(
			(response) => {
				setCursoCompletoLista(response.data)
			}
		)
	}, [])
	return (
		<>
			<div className="tituloLista">
				<h1>Consultas SQL</h1>
			</div>
			<div className="contenedorListas">
				<div className="listasTotalidad">
					<div className="tituloListaSQL">
						<h1>Cursos y estudiantes</h1>
					</div>
					<table className="tablaTotalidad">
						<tr>
							<th className="titulos">Nombre del Curso</th>
							<th className="titulos">Profesores</th>
							<th className="titulos">Estudiante 1</th>
							<th className="titulos">Estudiante 2</th>
							<th className="titulos">Estudiante 3</th>
							<th className="titulos">Estudiante 4</th>
							<th className="titulos">Estudiante 5</th>
						</tr>

						{cursoCompletolista.map((val) => {
							return (
								<tr>
									<td className="respuestas">{val.Curso}</td>
									<td className="respuestas">{val.Profeso}</td>
									<td className="respuestas">{val.Estudiante_1}</td>
									<td className="respuestas">{val.Estudiante_2}</td>
									<td className="respuestas">{val.Estudiante_3}</td>
									<td className="respuestas">{val.Estudiante_4}</td>
									<td className="respuestas">{val.Estudiante_5}</td>
								</tr>
							)
						})}
					</table>
				</div>
				<div className="listasAlumnos">
					<div className="tituloListaSQL">
						<h1>Alumnos</h1>
					</div>
					<table className="tablaAlumnos">
						<tr>
							<th className="titulos">Nombre de los estudiantes</th>
							<th className="titulos">Edad</th>
							<th className="titulos">Rut</th>
							<th className="titulos">Correo</th>
							<th className="titulos">Telefono</th>
							<th className="titulos">Cursos</th>
						</tr>
						{alumnoLista.map((val) => {
							return (
								<tr>
									<td className="respuestas">{val.alumno_nombre}</td>
									<td className="respuestas">{val.alumno_edad}</td>
									<td className="respuestas">{val.alumno_rut}</td>
									<td className="respuestas">{val.alumno_correo}</td>
									<td className="respuestas">{val.alumno_telefono}</td>
									<td className="respuestas">
										Matematicas, Ingles,<br></br> Programacion, Pintura
									</td>
								</tr>
							)
						})}
					</table>
				</div>
				<div className="listasAlumnosAprobados">
					<div className="tituloListaSQL">
						<h1>Alumnos Reprobados</h1>
					</div>
					<table className="tablaAlumnosAprobados">
						<tr>
							<th className="titulos">Nombre de los estudiantes</th>
							<th className="titulos">Curso</th>
							<th className="titulos">Aprobado?</th>
						</tr>
						<tr>
							<td className="respuestas">Manuel Anthony</td>
							<td className="respuestas">Matematicas</td>
							<td className="respuestas">Si</td>
						</tr>
						<tr>
							<td className="respuestas">Carlos Jose</td>
							<td className="respuestas">Matematicas</td>
							<td className="respuestas">Si</td>
						</tr>
						<tr>
							<td className="respuestas">Manuel Delgado</td>
							<td className="respuestas">Matematicas</td>
							<td className="respuestas">Si</td>
						</tr>
					</table>
				</div>
				<div className="listasAlumnosReprobados">
					<div className="tituloListaSQL">
						<h1>Alumnos Aprobados</h1>
					</div>
					<table className="tablaAlumnosReprobados">
						<tr>
							<th className="titulos">Nombre del Curso</th>
							<th className="titulos">Profesores</th>
							<th className="titulos">Nombre de los estudiantes</th>
						</tr>
						<tr>
							<td className="respuestas">Matematicas</td>
							<td className="respuestas">Rene</td>
							<td className="respuestas">Carlos Jose</td>
						</tr>
					</table>
				</div>
			</div>
		</>
	)
}
/* 
class ListasDeConsultas extends React.Component {
	render() {
		return (
			
		)
	}
}
 */

export default ListasDeConsultas
