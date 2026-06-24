const request = require('supertest');
const app = require('../app');

describe('API de tareas', () => {
  test('GET /tareas debe devolver una lista de tareas', async () => {
    const response = await request(app).get('/tareas');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /tareas/1 debe devolver la tarea con id 1', async () => {
    const response = await request(app).get('/tareas/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('titulo');
  });

  test('GET /tareas/999 debe devolver error 404', async () => {
    const response = await request(app).get('/tareas/999');

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('mensaje', 'Tarea no encontrada');
  });

  test('POST /tareas debe crear una nueva tarea', async () => {
    const response = await request(app)
      .post('/tareas')
      .send({ titulo: 'Aprender CI/CD' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('titulo', 'Aprender CI/CD');
  });
  test('GET /tareas debe devolver listado y tareas cuando existe NOMBRE_LISTADO', async () => {
    process.env.NOMBRE_LISTADO = 'Mis tareas';

    const response = await request(app).get('/tareas');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('Listado');
    expect(response.body).toHaveProperty('tareas');
    expect(Array.isArray(response.body.tareas)).toBe(true);

    delete process.env.NOMBRE_LISTADO;
  });
});