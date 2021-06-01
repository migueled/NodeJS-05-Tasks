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

const taskSchema = new mongoose.Schema( modelTasks , { timestamps : true } )

const Task = mongoose.model( 'Tasks' , taskSchema )

module.exports = Task