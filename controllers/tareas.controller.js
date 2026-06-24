const tareas = [
    { id: 1, titulo: 'Aprender Git' },
    { id: 2, titulo: 'Aprender Express' }
];

const obtenerTareas = (req, res) => {
    if (process.env.NOMBRE_LISTADO) {
        res.json({
            Listado: process.env.NOMBRE_LISTADO,
            tareas: tareas
        })
    } else {
        res.json(tareas);
    }

};

const obtenerTareas = (req, res) => {
    if (process.env.NOMBRE_LISTADO) {
        return res.json({
            Listado: process.env.NOMBRE_LISTADO,
            tareas
        });
    }

    return res.json(tareas);
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