const express = require('express');
const bodyParser = require('body-parser');
const alumnosRoutes = require('./routes/alumnosRoutes');

const app = express();
const port = 2023;

app.use(bodyParser.json());


app.use('/alumnos', alumnosRoutes);

app.get('/', (req, res) => {

  res.send(`
    <html>
      <head>
        <title>Bienvenido</title>
      </head>
      <body>
        <h1>Bienvenido a la página de inicio</h1>
        <p><a href="/alumnos">Lista de Alumnos</a></p>
      </body>
    </html>
  `);
});



app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
