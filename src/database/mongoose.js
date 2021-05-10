const mongoose = require( 'mongoose' )
const validator = require( 'validator' )

//mongodb://localhost/my_database
const dataBase = 'mongodb://127.0.0.1:27017/task-manager-api'

const configMongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect( dataBase , configMongoose )

/*
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
*/