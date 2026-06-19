const express = require('express');
const app = express();

app.use(express.json());

const tareasRoutes = require('./routes/tareas.routes');
app.use('/tareas', tareasRoutes);

module.exports = app;