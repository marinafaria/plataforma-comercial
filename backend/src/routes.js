const express = require('express');
const routes = express.Router();
const leadsController = require('./controllers/leadsController');
const firebase = require("firebase/auth");

routes.post('/', leadsController.store);
routes.get('/attentionLeads', leadsController.newLeads);
routes.get('/user/:id', leadsController.user)
routes.get('/index', leadsController.index)
routes.put('/update/:id', leadsController.update)

routes.post('/login', (req, res) => {
    const userData = req.body.user;
    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then((user) => {
      User.getByUid(user.uid).then((currentLogged) => {
        if (currentLogged) {
            req.session.userId = currentLogged._id;
            req.session.userUid = user.uid;
            req.session.email = currentLogged.email;
            console.log(req.session);
            res.redirect('/user');
        }else {
          console.log('Document not found');
          res.redirect('/error');
        }
      }).catch((error) => {
        console.log(error);
        res.redirect('/error');
      });
    }).catch((error) => {
      switch (error.code) {
        case 'auth/wrong-password':
            console.log('senha incorreta');
          break;
        case 'auth/user-not-found':
            console.log('usuário não cadastrado');
          break;
        case 'auth/invalid-email':
            console.log('Verifique se o email está digitado corretamente.');
          break;
        case 'auth/network-request-failed':
            console.log('Falha na internet. Verifique sua conexão de rede.');
          break;
        default:
            console.log('Erro indefinido.');
      }
      console.log(`Error Code: ${error.code}`);
      console.log(`Error Message: ${error.message}`);
      res.redirect('/login');
    });
  });
  

module.exports = routes;
    