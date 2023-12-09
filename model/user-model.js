const User = require("../schema/user-schema");


async function createData(payload) {
    try {
        const result = await User.create(payload);
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

async function retriveUser(email, password) {
    try {
        const result = await User.findOne({ email: email });
        if(!result){
            throw new Error(`Account does not exists`)
        }
        if (result && result.password && result.password === password) {
            return result;
        }
        else {
            throw new Error(`Incorrect Password`);
        }
    }
    catch (err) {
        throw new Error(err);
    }
}

async function readData() {
    try {
        const result = await User.find();
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

async function modify(objectId, newData) {
    try {
        const result = await User.findByIdAndUpdate(objectId, newData);
        return (result);
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    createData,
    retriveUser,
    readData,
    modify
}