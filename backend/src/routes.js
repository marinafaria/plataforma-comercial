const express = require('express');
const routes = express.Router();
const leadsController = require('./controllers/leadsController');

routes.post('/', leadsController.store);
routes.get('/attentionLeads', leadsController.newLeads);
routes.get('/leads', leadsController.index);
routes.put('/update/:id', leadsController.update)


module.exports = routes;
    