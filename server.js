const app = require('./app');

console.log("Listado:", process.env.NOMBRE_LISTADO);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});