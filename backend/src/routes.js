const express = require('express');
const routes = express.Router();
const leadsController = require('./controllers/leadsController');

routes.post('/', leadsController.store);
routes.get('/leads', leadsController.newLeads);

// tem que instalar o method-override pra funcionar
// routes.put('/:id', clientsController.store);

module.exports = routes;
    