import React, {useState, useEffect} from "react"
import "../stylesheets/EditarCurso.css"
import Axios from "axios"

/* useEffect se trae los datos 1 vez, en el momento que se carga la pagina web */

function EditarCurso(props) {
	/* Listas de alumnos, cursos y profesores */
	const [alumnoLista, setAlumnoLista] = useState([])
	const [cursoLista, setCursoLista] = useState([])
	const [profesorLista, setProfesorLista] = useState([])
	const [cursosCreadosLista, setCursosCreadosLista] = useState([])
	const [
		cursosCreadosEstudiantesLista,
		setCursosCreadosEstudiantesLista,
	] = useState([])
	const [cursoTraido, setCursoTraido] = useState([])
	const [profesorTraido, setProfesorTraido] = useState([])
	/* estados para setear los datos del curso traidos en la funcion de enviar clase */

	const [alumnoTraido1, setAlumnoTraido1] = useState("")
	const [alumnoTraido2, setAlumnoTraido2] = useState("")
	const [alumnoTraido3, setAlumnoTraido3] = useState("")
	const [alumnoTraido4, setAlumnoTraido4] = useState("")
	const [alumnoTraido5, setAlumnoTraido5] = useState("")
	const [alumnoTraido1Id, setAlumnoTraido1Id] = useState(0)
	const [alumnoTraido2Id, setAlumnoTraido2Id] = useState(0)
	const [alumnoTraido3Id, setAlumnoTraido3Id] = useState(0)
	const [alumnoTraido4Id, setAlumnoTraido4Id] = useState(0)
	const [alumnoTraido5Id, setAlumnoTraido5Id] = useState(0)
	const [alumnoSeleccionadoNombre, setAlumnoSeleccionadoNombre] = useState("")
	const [alumnoSeleccionadoId, setAlumnoSeleccionadoId] = useState("")
	const [cursoSeleccionado, setCursoSeleccionado] = useState("")
	/* Lista de valores que seran enviados al servidor */

	/* Estudiante a Actualizar */
	const [alumnoNota1, setAlumnoNota1] = useState(1.0)
	const [alumnoNota2, setAlumnoNota2] = useState(1.0)
	const [alumnoNota3, setAlumnoNota3] = useState(1.0)
	const [alumnoNota4, setAlumnoNota4] = useState(1.0)
	const [alumnoNotaFinal, setAlumnoNotaFinal] = useState(0)
	const [alumnoPromedio, setAlumnoPromedio] = useState(1)
	const [alumnoEstado, setAlumnoEstado] = useState("")
	const [claseSeleccionadaNombre, setClaseSeleccionadaNombre] = useState("")
	const [claseSeleccionadaId, setClaseSeleccionadaId] = useState("")
	/* Lista de valores a enviar dentro del formulario de crear curso */

	const [cursoNombreId, setCursoNombreId] = useState("")
	const [cursoProfesorId, setCursoProfesorId] = useState(0)
	const [cursoAlumno1Id, setCursoAlumno1Id] = useState(0)
	const [cursoAlumno2Id, setCursoAlumno2Id] = useState(0)
	const [cursoAlumno3Id, setCursoAlumno3Id] = useState(0)
	const [cursoAlumno4Id, setCursoAlumno4Id] = useState(0)
	const [cursoAlumno5Id, setCursoAlumno5Id] = useState(0)

	/* TODO: dentro de la base de datos el alumno tiene que ser manejado por el ID no por el nombre: corregir */
	/* Funciones que manejan los datos de los profesores y estudiantes */
	const manejarCambioCurso = (e) => {
		setCursoNombreId(e.target.value)
	}
	const manejarCambioProfesor = (e) => {
		setCursoProfesorId(e.target.value)
	}

	const manejarCambioAlumno1 = (e) => {
		setCursoAlumno1Id(e.target.value)
	}
	const manejarCambioAlumno2 = (e) => {
		setCursoAlumno2Id(e.target.value)
	}
	const manejarCambioAlumno3 = (e) => {
		setCursoAlumno3Id(e.target.value)
	}
	const manejarCambioAlumno4 = (e) => {
		setCursoAlumno4Id(e.target.value)
	}
	const manejarCambioAlumno5 = (e) => {
		setCursoAlumno5Id(e.target.value)
	}
	const manejarCambioCursoNotas = () => {
		const e = document.getElementById("eleccionClase")
		const valorSeleccionado = parseInt(e.options[e.selectedIndex].id, 10)
		const valorSeleccionadoNombre = e.options[e.selectedIndex].value
		setClaseSeleccionadaId(valorSeleccionado)
		setClaseSeleccionadaNombre(valorSeleccionadoNombre)
	}
	const manejarCambioDeAlumno = () => {
		const e = document.getElementById("eleccionAlumno")
		const aIdSeleccionadoId = parseInt(e.options[e.selectedIndex].id, 10)
		const aIdSeleccionadoNombre = e.options[e.selectedIndex].value
		console.log(aIdSeleccionadoId)
		console.log(aIdSeleccionadoNombre)
		setAlumnoSeleccionadoNombre(aIdSeleccionadoNombre)
		setAlumnoSeleccionadoId(aIdSeleccionadoId)
	}

	const clg = () => {
		console.log(alumnoSeleccionadoId)
		console.log(alumnoSeleccionadoNombre)
	}

	/* Funcion que crea el Curso */
	const submitCursoActualizado = () => {
		console.log(`Felicidades, enviaste la siguiente informacion:
			Curso:   Id: ${cursoNombreId}
			Profesor Id: ${cursoProfesorId}
			Alumno1: Id: ${cursoAlumno1Id}
			Alumno2  Id: ${cursoAlumno2Id}
			Alumno3: Id: ${cursoAlumno3Id}
			Alumno4: Id: ${cursoAlumno4Id}
			Alumno5: Id: ${cursoAlumno5Id}
			`)
		Axios.post("http://localhost:3001/api/insert/cursoCreado", {
			cursoNombre: cursoNombreId,
			cursoProfesor: cursoProfesorId,
			cursoAlumno1: cursoAlumno1Id,
			cursoAlumno2: cursoAlumno2Id,
			cursoAlumno3: cursoAlumno3Id,
			cursoAlumno4: cursoAlumno4Id,
			cursoAlumno5: cursoAlumno5Id,
		})
	}
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
		Axios.get("http://localhost:3001/api/getCursosCreados").then((response) => {
			setCursosCreadosLista(response.data)
		})
		Axios.get("http://localhost:3001/api/getCursosCreadosAlumnos").then(
			(response) => {
				setCursosCreadosEstudiantesLista(response.data)
			}
		)
	}, [])
	/* Funcion que calcula el Promedio */
	const calcularPromedio = () => {
		let totalNumber = 0
		totalNumber =
			totalNumber + alumnoNota1 + alumnoNota2 + alumnoNota3 + alumnoNota4
		let promedio = totalNumber / 4
		console.log(totalNumber)
		console.log(promedio)
		setAlumnoPromedio(promedio)
		if (promedio >= 6) {
			setAlumnoEstado("Aprobado")
		} else if (promedio <= 3) {
			setAlumnoEstado("Reprobado")
		} else {
			setAlumnoEstado("Pendiente de Examen")
		}
	}
	const submitNotas = () => {
		if (alumnoNotaFinal) {
			let sumaPromedioFinal = 0
			sumaPromedioFinal = (alumnoPromedio + alumnoNotaFinal) / 2
			console.log(sumaPromedioFinal)
			console.log(alumnoSeleccionadoId)
			console.log(alumnoSeleccionadoNombre)
			console.log(cursoSeleccionado)
			Axios.post("http://localhost:3001/api/insert/cursoNotas", {
				alumnoId: alumnoSeleccionadoId,
				cursoId: cursoSeleccionado,
				nota1: alumnoNota1,
				nota2: alumnoNota2,
				nota3: alumnoNota3,
				nota4: alumnoNota4,
				notaExamenFinal: alumnoNotaFinal,
				promedio: sumaPromedioFinal,
				estado: alumnoEstado,
			})
			/* Solicitud de Axios aca con nota final agregada y promedio calculado */
		} else if (!alumnoNotaFinal) {
			console.log(alumnoPromedio)
			console.log(alumnoSeleccionadoId)
			console.log(alumnoSeleccionadoNombre)
			console.log(cursoSeleccionado)
		}
	}

	/* Funcion que cambia la clase Actual */
	let claseActual = ""
	/* Funcion que envia la clase actual seleccionada a la base de datos y trae los datos de regreso de dicha clase con sus alumnos */
	const enviarClase = () => {
		Axios.get("http://localhost:3001/api/getCursoCreadoElegido", {
			params: {
				claseSeleccionadaId: claseSeleccionadaId,
				claseSeleccionadaNombre: claseSeleccionadaNombre,
			},
		}).then((resp) => {
			setCursoTraido(resp.data)
		})
	}

	return (
		/* Contenedor Principal */
		<div className="contenedorPrincipalEditar">
			{/* Formulario donde se crean los cursos en si */}
			<div className="edicionFormulario">
				<h1 className="tituloEditar">Seleccione un curso para editar</h1>
				<div className="contenedorLista1">
					<div id={`cursoEditar`} className={`cursosEditar`}>
						<form className={`formularioCurso formularioPrincipal`} action="">
							<label htmlFor="">Ingrese el curso a crear</label>
							<select
								onChange={manejarCambioCurso}
								value={cursoNombreId.curso_id}
								className={`seleccionComponente ${cursoNombreId.curso_id}`}
								name="eleccionCurso"
							>
								<option
									id="eleccionNulaCurso"
									value="eleccionNulaCurso"
									selected
								>
									-Seleccione un Curso
								</option>
								{cursoLista.map((curso) => {
									return (
										<option
											id={`opcion${curso.curso_id}`}
											value={curso.curso_id}
										>
											{curso.curso_nombre}
										</option>
									)
								})}
							</select>
							<label htmlFor="">Ingrese nombre del profesor</label>
							<select
								onChange={manejarCambioProfesor}
								value={cursoProfesorId.profesor_id}
								className="seleccionComponente"
								name="eleccionProfesor"
							>
								<option
									id="eleccionNulaProfesor"
									value="eleccionNulaProfesor"
									disabled
									selected
								>
									-Seleccione un Profesor-
								</option>
								{profesorLista.map((profesor) => (
									<option
										id={`opcion${profesor.profesor_id}`}
										value={profesor.profesor_id}
									>
										{profesor.profesor_nombre}
									</option>
								))}
							</select>
							<label htmlFor="">Ingrese los estudiantes del curso</label>
							{/* Hacer un select que se cree con las opciones basadas en los datos que se encuentran en la base de datos */}
							<select
								onChange={manejarCambioAlumno1}
								value={cursoAlumno1Id.alumno_id}
								className="seleccionComponente"
								name="eleccionEstudiante1"
								id="eleccionEstudiante1"
							>
								<option value="eleccionNulaEstudiante" disabled selected>
									-Seleccione un Estudiante-
								</option>
								{alumnoLista.map((alumno) => (
									<option value={alumno.alumno_id}>
										{alumno.alumno_nombre}
									</option>
								))}
							</select>
							<select
								onChange={manejarCambioAlumno2}
								value={cursoAlumno2Id.alumno_id}
								className="seleccionComponente"
								name="eleccionEstudiante2"
								id="eleccionEstudiante2"
							>
								<option value="eleccionNulaEstudiante" disabled selected>
									-Seleccione un Estudiante-
								</option>
								{alumnoLista.map((alumno) => (
									<option value={alumno.alumno_id}>
										{alumno.alumno_nombre}
									</option>
								))}
							</select>
							<select
								onChange={manejarCambioAlumno3}
								value={cursoAlumno3Id.alumno_id}
								className="seleccionComponente"
								name="eleccionEstudiante3"
								id="eleccionEstudiante3"
							>
								<option value="eleccionNulaEstudiante" disabled selected>
									-Seleccione un Estudiante-
								</option>
								{alumnoLista.map((alumno) => (
									<option value={alumno.alumno_id}>
										{alumno.alumno_nombre}
									</option>
								))}
							</select>
							<select
								onChange={manejarCambioAlumno4}
								value={cursoAlumno4Id.alumno_id}
								className="seleccionComponente"
								name="eleccionEstudiante4"
								id="eleccionEstudiante4"
							>
								<option value="eleccionNulaEstudiante" disabled selected>
									-Seleccione un Estudiante-
								</option>
								{alumnoLista.map((alumno) => (
									<option value={alumno.alumno_id}>
										{alumno.alumno_nombre}
									</option>
								))}
							</select>
							<select
								onChange={manejarCambioAlumno5}
								value={cursoAlumno5Id.alumno_id}
								className="seleccionComponente"
								name="eleccionEstudiante5"
								id="eleccionEstudiante5"
							>
								<option value="eleccionNulaEstudiante" disabled selected>
									-Seleccione un Estudiante-
								</option>
								{alumnoLista.map((alumno) => (
									<option value={alumno.alumno_id}>
										{alumno.alumno_nombre}
									</option>
								))}
							</select>
							<button onClick={submitCursoActualizado} className="botonSubmit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="edicionNotas">
				<h1 className="tituloEditar">
					Seleccione un curso para editar sus notas:
				</h1>
				<div className="contenedorLista2">
					<select
						onChange={manejarCambioCursoNotas}
						value={claseSeleccionadaId}
						className="seleccionComponente"
						name="eleccionClase"
						id="eleccionClase"
					>
						<option value="0">-Seleccione un curso-</option>
						{cursosCreadosLista.map((curso) => {
							return (
								<option
									id={curso.ID_del_Curso}
									value={curso.Nombre_Del_Profesor}
								>
									{curso.Nombre_del_Curso}: {curso.Nombre_Del_Profesor}
								</option>
							)
						})}
					</select>
					<h1 className="resultado">Su profesor es: {profesorTraido}</h1>
					<button onClick={enviarClase} className="botonSubmit">
						Actualizar Curso
					</button>
					<button
						onClick={() => {
							setProfesorTraido(cursoTraido[0].profesor_nombre)
							setAlumnoTraido1(cursoTraido[0].Alumno1)
							setAlumnoTraido2(cursoTraido[0].Alumno2)
							setAlumnoTraido3(cursoTraido[0].Alumno3)
							setAlumnoTraido4(cursoTraido[0].Alumno4)
							setAlumnoTraido5(cursoTraido[0].Alumno5)
							setAlumnoTraido1Id(cursoTraido[0].AlumnoId1)
							setAlumnoTraido2Id(cursoTraido[0].AlumnoId2)
							setAlumnoTraido3Id(cursoTraido[0].AlumnoId3)
							setAlumnoTraido4Id(cursoTraido[0].AlumnoId4)
							setAlumnoTraido5Id(cursoTraido[0].AlumnoId5)
							setCursoSeleccionado(parseInt(cursoTraido[0].cursosCreados_id))
						}}
						className="botonSubmit"
					>
						Actualizar Alumnos
					</button>
					<form className="contenedorNotas">
						<div className="contenedorDeAlumnos">
							<div className="alumnoContenedor1 alumnoContenedorPrincipal">
								<select
									onChange={(e) => {
										manejarCambioDeAlumno()
										clg()
									}}
									value={alumnoSeleccionadoId}
									className="seleccionComponente"
									name="eleccionAlumno"
									id="eleccionAlumno"
								>
									<option id={alumnoTraido1Id} value={alumnoTraido1}>
										{alumnoTraido1}
									</option>
									<option id={alumnoTraido2Id} value={alumnoTraido2}>
										{alumnoTraido2}
									</option>
									<option id={alumnoTraido3Id} value={alumnoTraido3}>
										{alumnoTraido3}
									</option>
									<option id={alumnoTraido4Id} value={alumnoTraido4}>
										{alumnoTraido4}
									</option>
									<option id={alumnoTraido5Id} value={alumnoTraido5}>
										{alumnoTraido5}
									</option>
								</select>
								<div className="listaDeInputs">
									<input
										onChange={(e) => {
											setAlumnoNota1(parseInt(e.target.value))
										}}
										type="number"
										className="notaInput"
										placeholder="Nota 1"
										name="estudiante1Nota1"
									/>
									<input
										onChange={(e) => {
											setAlumnoNota2(parseInt(e.target.value))
										}}
										type="number"
										className="notaInput"
										placeholder="Nota 2"
										name="estudianteNota2"
									/>
									<input
										onChange={(e) => {
											setAlumnoNota3(parseInt(e.target.value))
										}}
										type="number"
										className="notaInput"
										placeholder="Nota 3"
										name="estudianteNota3"
									/>

									<input
										onChange={(e) => {
											setAlumnoNota4(parseInt(e.target.value))
										}}
										type="number"
										className="notaInput"
										placeholder="Nota 4"
										name="estudianteNota4"
									/>
									<button
										onClick={(e) => {
											e.preventDefault()
											calcularPromedio()
										}}
										className="botonSubmit"
									>
										Calcular Promedio
									</button>
								</div>
								<h1 className="resultado">Su promedio es: {alumnoPromedio}</h1>
								<h1 className="resultado">El Alumno esta: {alumnoEstado}</h1>
								<input
									onChange={(e) => {
										setAlumnoNotaFinal(parseInt(e.target.value))
									}}
									type="number"
									className={
										alumnoEstado === "Aprobado" || claseActual === "Reprobado"
											? "claseOculta"
											: "notaFinal notaInput"
									}
									placeholder="Nota Examen"
									name="estudianteNota5"
								/>
								<button
									onClick={(e) => {
										e.preventDefault()
										submitNotas()
									}}
									className="botonSubmit botonSubmitEditarNotas"
								>
									Subir Notas
								</button>
							</div>
						</div>
						<hr></hr>
					</form>
				</div>
			</div>
		</div>
	)
}
export default EditarCurso

/* 
	const [cursoProfesor, setCursoProfesor] = useState("")
	const [cursoNombre, setCursoNombre] = useState("")
	const [cursoAlumno5, setCursoAlumno5] = useState("")
	const [cursoAlumno4, setCursoAlumno4] = useState("")
	const [cursoAlumno3, setCursoAlumno3] = useState("")
	const [cursoAlumno2, setCursoAlumno2] = useState("")
	const [cursoAlumno1, setCursoAlumno1] = useState("") */

/* if (
			cursoAlumno1 === cursoAlumno2 ||
			cursoAlumno1 === cursoAlumno3 ||
			cursoAlumno1 === cursoAlumno4 ||
			cursoAlumno1 === cursoAlumno5
		) {
			return console.log("no puedes enviar el mismo estudiante dos veces")
		}
		if (
			cursoAlumno2 === cursoAlumno1 ||
			cursoAlumno2 === cursoAlumno3 ||
			cursoAlumno2 === cursoAlumno4 ||
			(cursoAlumno2 === cursoAlumno5 && cursoAlumno2 !== "Alumno Nulo")
		) {
			return console.log("no puedes enviar el mismo estudiante dos veces")
		}
		if (
			cursoAlumno3 === cursoAlumno2 ||
			cursoAlumno3 === cursoAlumno1 ||
			cursoAlumno3 === cursoAlumno4 ||
			(cursoAlumno3 === cursoAlumno5 && cursoAlumno3 !== "Alumno Nulo")
		) {
			return console.log("no puedes enviar el mismo estudiante dos veces")
		}
		if (
			cursoAlumno4 === cursoAlumno2 ||
			cursoAlumno4 === cursoAlumno3 ||
			cursoAlumno4 === cursoAlumno1 ||
			(cursoAlumno4 === cursoAlumno5 && cursoAlumno4 !== "Alumno Nulo")
		) {
			return console.log("no puedes enviar el mismo estudiante dos veces")
		}
		if (
			cursoAlumno5 === cursoAlumno2 ||
			cursoAlumno5 === cursoAlumno3 ||
			cursoAlumno5 === cursoAlumno4 ||
			(cursoAlumno5 === cursoAlumno1 && cursoAlumno5 !== "Alumno Nulo")
		) {
			return console.log("no puedes enviar el mismo estudiante dos veces")
		} */

/* {cursosCreadosEstudiantesLista.map((estudiantes) => {
								return (
									<>

									</>
								)
							})} */

/* 
							

	const [alumno2Nota1, setAlumno2Nota1] = useState("")
	const [alumno2Nota2, setAlumno2Nota2] = useState("")
	const [alumno2Nota3, setAlumno2Nota3] = useState("")
	const [alumno2Nota4, setAlumno2Nota4] = useState("")
	const [alumno2Nota5, setAlumno2Nota5] = useState("")


	const [alumno3Nota1, setAlumno3Nota1] = useState("")
	const [alumno3Nota2, setAlumno3Nota2] = useState("")
	const [alumno3Nota3, setAlumno3Nota3] = useState("")
	const [alumno3Nota4, setAlumno3Nota4] = useState("")
	const [alumno3Nota5, setAlumno3Nota5] = useState("")


	const [alumno4Nota1, setAlumno4Nota1] = useState("")
	const [alumno4Nota2, setAlumno4Nota2] = useState("")
	const [alumno4Nota3, setAlumno4Nota3] = useState("")
	const [alumno4Nota4, setAlumno4Nota4] = useState("")
	const [alumno4Nota5, setAlumno4Nota5] = useState("")


	const [alumno5Nota1, setAlumno5Nota1] = useState("")
	const [alumno5Nota2, setAlumno5Nota2] = useState("")
	const [alumno5Nota3, setAlumno5Nota3] = useState("")
	const [alumno5Nota4, setAlumno5Nota4] = useState("")
	const [alumno5Nota5, setAlumno5Nota5] = useState("") */

/* 
								<div className="alumnoContenedor2 alumnoContenedorPrincipal">
								<h1 className={`estudianteNotas estudianteNotas${2}`}>
									Alumno 2
								</h1>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 1"
									name="estudiante1Nota1"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 2"
									name="estudiante1Nota2"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 3"
									name="estudiante1Nota3"
								/>

								<input
									type="text"
									className="notaInput"
									placeholder="Nota 4"
									name="estudiante1Nota4"
								/>
							</div>
							<div className="alumnoContenedor3 alumnoContenedorPrincipal">
								<h1 className={`estudianteNotas estudianteNotas${3}`}>
									{" "}
									Alumno 3
								</h1>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 1"
									name="estudiante1Nota1"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 2"
									name="estudiante1Nota2"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 3"
									name="estudiante1Nota3"
								/>

								<input
									type="text"
									className="notaInput"
									placeholder="Nota 4"
									name="estudiante1Nota4"
								/>
							</div>
							<div className="alumnoContenedor4 alumnoContenedorPrincipal">
								<h1 className={`estudianteNotas estudianteNotas${4}`}>
									{" "}
									Alumno 4
								</h1>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 1"
									name="estudiante1Nota1"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 2"
									name="estudiante1Nota2"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 3"
									name="estudiante1Nota3"
								/>

								<input
									type="text"
									className="notaInput"
									placeholder="Nota 4"
									name="estudiante1Nota4"
								/>
							</div>
							<div className="alumnoContenedor5 alumnoContenedorPrincipal">
								<h1 className={`estudianteNotas estudianteNotas${5}`}>
									{" "}
									Alumno 5
								</h1>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 1"
									name="estudiante1Nota1"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 2"
									name="estudiante1Nota2"
								/>
								<input
									type="text"
									className="notaInput"
									placeholder="Nota 3"
									name="estudiante1Nota3"
								/>

								<input
									type="text"
									className="notaInput"
									placeholder="Nota 4"
									name="estudiante1Nota4"
								/>
							</div> */
