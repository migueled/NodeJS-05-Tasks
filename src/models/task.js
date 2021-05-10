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
    }
}

const Task = mongoose.model( 'Tasks' , modelTasks )

module.exports = Task