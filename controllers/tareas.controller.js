const tareas = [
    { id: 1, titulo: 'Aprender Git' },
    { id: 2, titulo: 'Aprender Express' }
];

const obtenerTareas = (req, res) => {
    if (process.env.NOMBRE_LISTADO) {
        return res.json({
            Listado: process.env.NOMBRE_LISTADO,
            tareas
        });
    }

    return res.json(tareas);
};

const obtenerTareaPorId = (req, res) => {

    const id = parseInt(req.params.id);

    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({
            mensaje: 'Tarea no encontrada'
        });
    }

    res.json(tarea);
};

const crearTarea = (req, res) => {

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo
    };

    tareas.push(nuevaTarea);

    res.status(201).json(nuevaTarea);
};

module.exports = {
    obtenerTareas,
    obtenerTareaPorId,
    crearTarea
};