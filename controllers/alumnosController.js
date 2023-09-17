const { getAlumnos, saveAlumnos } = require('../services/alumnosService');

function listarAlumnos(req, res) {
  const alumnos = getAlumnos();
  let html = "<h1>Lista de Alumnos</h1><ul>";
  alumnos.forEach((alumno) => {
    html +=  `<li>${alumno.nombre} ${alumno.apellido} <a href="/alumnos/${alumno.legajo}">Ver detalles</a></li>`;
  });
  html += "</ul>";
  res.send(html);
}

function verAlumno(req, res) {
  const legajo = req.params.legajo;
  const alumnos = getAlumnos();
  const alumno = alumnos.find((a) => a.legajo === legajo);
  if (!alumno) {
    res.status(404).json({ mensaje: 'Alumno no encontrado' });
  } else {
    res.json(alumno);
  }
}

function agregarAlumno(req, res) {
  const nuevoAlumno = req.body;
  const alumnos = getAlumnos();
  alumnos.push(nuevoAlumno);
  saveAlumnos(alumnos);
  res.status(201).json({ mensaje: 'Alumno agregado con éxito' });
}


function modificarAlumno(req, res) {
  const legajo = req.params.legajo;
  const alumnos = getAlumnos();
  const index = alumnos.findIndex((a) => a.legajo === legajo);
  if (index === -1) {
    res.status(404).json({ mensaje: 'Alumno no encontrado' });
  } else {
    const alumnoModificado = { ...alumnos[index], ...req.body };
    alumnos[index] = alumnoModificado;
    saveAlumnos(alumnos);
    res.json({ mensaje: 'Alumno modificado con éxito' });
  }
}


function eliminarAlumno(req, res) {
  const legajo = req.params.legajo;
  const alumnos = getAlumnos();
  const index = alumnos.findIndex((a) => a.legajo === legajo);
  if (index === -1) {
    res.status(404).json({ mensaje: 'Alumno no encontrado' });
  } else {
    alumnos.splice(index, 1);
    saveAlumnos(alumnos);
    res.json({ mensaje: 'Alumno eliminado con éxito' });
  }
}


module.exports = {
  listarAlumnos,
  verAlumno,
  agregarAlumno,
  modificarAlumno,
  eliminarAlumno,
};
