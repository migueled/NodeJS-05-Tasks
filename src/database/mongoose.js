const mongoose = require( 'mongoose' )
//mongodb://localhost/my_database
const dataBase = 'mongodb://127.0.0.1:27017/task-manager-api'

const configMongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect( dataBase , configMongoose )

const modelUser = {
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        validate( value ) {
            if( value < 0 ) {
                throw new Error( 'Age must be a positive number' )
            }
        }
    }
}

const User = mongoose.model( 'User' , modelUser )

const dataMe = {
    name : 'Eduardo',
    age : 15
}

const me = new User( dataMe )

me.save()
    .then( () => {
        console.log( me)
    }).catch( ( error ) => {
        console.log( 'Error : ' , error )
    })
    
    /*mongoose.connect( dataBase , configMongoose )
    
    const modelTasks = {
        description : {
            type : String
        },
        completed : {
            type : Boolean
        }
    }
    
    const Tasks = mongoose.model( 'Tasks' , modelTasks )
    
    const dataTask = {
        description : 'Buy ice',
        completed : false
    }
    
    const createdTask = new Tasks( dataTask )
    
    createdTask.save()
        .then( () => {
            console.log( createdTask )
        }).catch( ( error ) => {
            console.log( 'Error : ' , error )
        })*/