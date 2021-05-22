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

const TaskSchema = new mongoose.Schema( modelTasks )

TaskSchema.pre( 'save' , async function( next ) {
    const task = this
    console.log('success')
    next()
})

const Task = mongoose.model( 'Tasks' , TaskSchema )

module.exports = Task