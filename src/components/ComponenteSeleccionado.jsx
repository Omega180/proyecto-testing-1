import React, {useState} from "react"
import "../stylesheets/ComponenteSeleccionado.css"
import Axios from "axios"

function ComponenteSeleccionado(props) {
	/* Valores tomados directamente del formulario con su "onChange", los Sets se llaman en los inputs en si */
	/* Valores del Alumno */
	const [alumnoNombre, setAlumnoNombre] = useState("")
	const [alumnoEdad, setAlumnoEdad] = useState("")
	const [alumnoRut, setAlumnoRut] = useState("")
	const [alumnoCorreo, setAlumnoCorreo] = useState("")
	const [alumnoTelefono, setAlumnoTelefono] = useState("")

	/* Valores del Curso */
	const [cursoNombre, setCursoNombre] = useState("")

	/* Valores del Profesor */
	const [profesorNombre, setProfesorNombre] = useState("")
	const [profesorEdad, setProfesorEdad] = useState("")
	const [profesorRut, setProfesorRut] = useState("")
	const [profesorCorreo, setProfesorCorreo] = useState("")
	const [profesorTelefono, setProfesorTelefono] = useState("")

	const submitAlumno = () => {
		Axios.post("http://localhost:3001/api/insert/alumno", {
			alumnoNombre: alumnoNombre,
			alumnoEdad: alumnoEdad,
			alumnoRut: alumnoRut,
			alumnoCorreo: alumnoCorreo,
			alumnoTelefono: alumnoTelefono,
		})
	}

	const submitCurso = () => {
		Axios.post("http://localhost:3001/api/insert/curso", {
			cursoNombre: cursoNombre,
		})
	}
	const submitProfesor = () => {
		Axios.get("http://localhost:3001/api/insert/profesor", {
			profesorNombre: profesorNombre,
			profesorEdad: profesorEdad,
			profesorRut: profesorRut,
			profesorCorreo: profesorCorreo,
			profesorTelefono: profesorTelefono,
		})
	}

	const valorActual = props.seleccion
	return (
		<div className="contenedorPrincipal">
			<div
				className={
					valorActual === "componenteCurso" ? "contenedorCurso" : "claseOculta"
				}
			>
				<h1 className="titulo">Ingrese un Curso</h1>
				<form className="formularioCurso">
					<label className="label"># Ingrese el nombre del Curso</label>
					<input
						onChange={(e) => {
							setCursoNombre(e.target.value)
						}}
						type="text"
						className="formularioInput"
						pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
						placeholder="Ejemplo: Matematicas"
						name="nombreCurso"
					/>
					<button onClick={submitCurso} className="botonSubmit">
						Submit
					</button>
				</form>
			</div>
			<div
				className={
					valorActual === "componenteAlumno"
						? "contenedorAlumno"
						: "claseOculta"
				}
			>
				<h1 className="titulo">Ingrese un Alumno</h1>
				<form className="formularioAlumno">
					<label className="label">
						# Ingrese el 1er nombre y apellido del alumno con la inicial en
						mayuscula
					</label>
					<input
						onChange={(e) => {
							setAlumnoNombre(e.target.value)
						}}
						type="text"
						className="formularioInput"
						placeholder="Ejemplo: Ciro Delgado"
						pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
						name="alumnoNombre"
					/>
					<label className="label"> # Ingrese la edad del Alumno</label>
					<input
						onChange={(e) => {
							setAlumnoEdad(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 20"
						min="18"
						max="80"
						label="alumno"
						name="alumnoEdad"
					/>
					<label className="label">
						{" "}
						# Ingrese el rut del alumno sin puntos o guion
					</label>
					<input
						onChange={(e) => {
							setAlumnoRut(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 260042602"
						label="alumno"
						name="alumnoRut"
					/>
					<label className="label"> # Ingrese el correo del Alumno</label>
					<input
						onChange={(e) => {
							setAlumnoCorreo(e.target.value)
						}}
						type="email"
						className="formularioInput"
						placeholder="Ejemplo: cirodelgado1803@gmail.com"
						label="alumno"
						name="alumnoCorreo"
					/>
					<label className="label"> # Ingrese el numero del alumno</label>
					<input
						onChange={(e) => {
							setAlumnoTelefono(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 932837077"
						label="alumno"
						name="alumnoTelefono"
					/>
					<button onClick={submitAlumno} className="botonSubmit">
						Submit
					</button>
				</form>
			</div>
			<div
				className={
					valorActual === "componenteProfesor"
						? "contenedorProfesor"
						: "claseOculta"
				}
			>
				<h1 className="titulo">Ingrese un Profesor</h1>
				<form className="formularioProfesor">
					<label className="label">
						# Ingrese el 1er nombre y apellido del profesor con la inicial en
						mayuscula
					</label>
					<input
						onChange={(e) => {
							setProfesorNombre(e.target.value)
						}}
						type="text"
						className="formularioInput"
						placeholder="Ejemplo: Rene Augusto"
						pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
						name="profesorNombre"
					/>
					<label className="label"> # Ingrese la edad del Profesor</label>
					<input
						onChange={(e) => {
							setProfesorEdad(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 20"
						min="18"
						max="80"
						label="profesor"
						name="profesorEdad"
					/>
					<label className="label">
						# Ingrese el rut del alumno sin puntos o guion
					</label>
					<input
						onChange={(e) => {
							setProfesorRut(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 260042602"
						label="profesor"
						name="profesorRut"
					/>
					<label className="label"> # Ingrese el correo del Profesor</label>
					<input
						onChange={(e) => {
							setProfesorCorreo(e.target.value)
						}}
						type="email"
						className="formularioInput"
						placeholder="Ejemplo: cirodelgado1803@gmail.com"
						label="profesor"
						name="profesorCorreo"
					/>
					<label className="label"> # Ingrese el numero del Profesor</label>
					<input
						onChange={(e) => {
							setProfesorTelefono(e.target.value)
						}}
						type="number"
						className="formularioInput"
						placeholder="Ejemplo: 932837077"
						label="profesor"
						name="profesorTelefono"
					/>
					<button onClick={submitProfesor} className="botonSubmit">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ComponenteSeleccionado
