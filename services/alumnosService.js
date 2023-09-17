const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/alumnos.json');

function getAlumnos() {
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(rawData);
}

function saveAlumnos(alumnos) {
  fs.writeFileSync(dataPath, JSON.stringify(alumnos, null, 2));
}

module.exports = {
  getAlumnos,
  saveAlumnos,
};
