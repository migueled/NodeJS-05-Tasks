const mongoose = require( 'mongoose' )

const modelTasks = {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        required : false,
        default : false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Users'
    }
}

const Task = mongoose.model( 'Tasks' , modelTasks )

module.exports = Task