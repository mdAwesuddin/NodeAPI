const userModel = require('../model/user-model')
var token = require("../JWTtoken");

async function insertData(req, res) {

    try {

        var payload = req.body;
        const data = await userModel.createData(payload);
        res.status(201).json(data);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    }
}

async function login(req, res) {
 
    try {
 
        var payload = req.body;
        const email = payload.email;
        const password = payload.password;
        const data = await userModel.retriveUser(email,password);
        if (data) {
            let userName = data.firstName + " " + data.lastName;
            let user = {
                userName: userName,
                email: data.email
            }
            const jwtToken = token.JWTtoken(user);
            res.status(200).json({ data: data, token: jwtToken });
        }
 
    }
    catch (err) {
        if(err.message === "Error: Account does not exists"){
            res.status(404).json({message:`Account doesn't exists`});
        }  
        else{
            res.status(404).json({message:`Incorrect password`});
        }
    }
}

async function getData(req, res) {

    try {
        const data = await userModel.readData();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    }

}

async function putData(req, res) {
    try {
        var id = req.params.id;
        var payload = req.body;
        const data = await userModel.modify(id, payload);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    };
}


module.exports = {
    insertData,
    login,
    getData,
    putData

}