const express = require('express');
const router = express.Router();
const {
  listarAlumnos,
  verAlumno,
  agregarAlumno,
  modificarAlumno,
  eliminarAlumno,
} = require('../controllers/alumnosController');

router.get('/', listarAlumnos);
router.get('/:legajo', verAlumno);
router.post('/', agregarAlumno);
router.put('/:legajo', modificarAlumno);
router.delete('/:legajo', eliminarAlumno);

module.exports = router;
