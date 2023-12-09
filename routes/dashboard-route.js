var express = require('express');

var router= express.Router();

var dashboardController = require('../controller/dashboard-controller');
var token = require('../JWTtoken');

router.post('/Dashboard',token.verifyJWTtoken,dashboardController.createData);

router.get('/Dashboard',token.verifyJWTtoken,dashboardController.readData);

router.put('/Dashboard/:id',token.verifyJWTtoken,dashboardController.modifyData);

router.delete('/Dashboard/:_id',token.verifyJWTtoken,dashboardController.deleteData);

module.exports= router;
