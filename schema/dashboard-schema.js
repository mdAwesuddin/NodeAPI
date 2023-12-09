const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dashBoard = new Schema({

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
        unique:true,
        sparse: true,
        
    },
    phoneNumber:{

        type:Number,
        require:true

    },
    image:{ 

        type:String,
    }
},
{
    timestamps:true,
    strict:true,
    versionKey:false
})

module.exports = mongoose.model('Dashboard',dashBoard);