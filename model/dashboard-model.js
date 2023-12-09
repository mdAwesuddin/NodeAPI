var DashBoard= require('../schema/dashboard-schema');

async function createdata(payload){

    try {
        const result = await DashBoard.create(payload);
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

async function read(){

    try{
        const result = await DashBoard.find();
        return(result);
    }
    catch(err){
        throw new Error(err);
    }
}

async function modify(objectId,newData){
    try{
        const result = await DashBoard.findByIdAndUpdate(objectId,{$set:{firstName:newData.firstName ,lastName:newData.lastName , email:newData.email ,phoneNumber:newData.phoneNumber,image:newData.image }},{new:true});
        return(result);
        }
        catch(err){
            throw new Error(err);
        }
}

async function deleteDetail(num){

    let result = await DashBoard.findByIdAndDelete(num);
    return result;
}

module.exports={

    createdata,
    read,
    modify,
    deleteDetail

}