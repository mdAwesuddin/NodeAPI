var Dashboard = require('../model/dashboard-model');

async function createData(req,res){
    try {

        var payload = req.body;
        const data = await Dashboard.createdata(payload);
        res.status(201).json(data);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        });
    }
}

async function readData(req,res){

    try{    
        var result= await Dashboard.read();
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({errorMessage:err.message})
    }
}

async function modifyData(req,res){
try{
        var id = req.params.id;
        var payload = req.body;
            const data = await Dashboard.modify(id,payload);
            res.status(200).json(data);
         }
         catch (err) {
            res.status(500).json({
                errorMessage: err.message
            });
        };

}

async function deleteData(req,res){
    try{

        var num = req.params._id;
        const result = await Dashboard.deleteDetail(num);
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json({
            errorMessage:err.message
        });

    }
}
    


module.exports={

    createData,
    readData,
    modifyData,
    deleteData


}