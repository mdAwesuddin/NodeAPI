const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({

    firstName : { 

        type:String,
        require:true

    },
    lastName : { 

        type:String,
        require:true

    },
    email:{

        type:String,
        require:true,
        unique:true
        
    },
    password:{ 

        type:String,
        require:true,
        length:8
    }
},
{
    timestamps:true,
    strict:true,
    versionKey:false
})

module.exports = mongoose.model('User',user);