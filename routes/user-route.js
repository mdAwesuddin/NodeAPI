var express = require('express');

var router = express.Router();

var userController = require('../controller/user-controller');
var verifytoken = require('../JWTtoken');

router.post("/user",userController.insertData);

router.post('/login',userController.login);

router.get("/user",verifytoken.verifyJWTtoken,userController.getData);

router.put("/user/:id",verifytoken.verifyJWTtoken,userController.putData);


module.exports=router;