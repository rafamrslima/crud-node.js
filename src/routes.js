
const express = require('express');
const routes = new express.Router();
const coursesController = require('./controllers/CourseController')
 
routes.get('/api/courses/:id', coursesController.get);
routes.get('/api/courses', coursesController.getAll);
routes.post('/api/courses', coursesController.save);
routes.put('/api/courses/:id', coursesController.update);
routes.delete('/api/courses/:id', coursesController.remove);

module.exports = routes;