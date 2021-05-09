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

/*const modelUser = {
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        validate( value ) {
            if( !validator.isEmail( value) ) {
                throw new Error ( 'Email is invalid' )
            }
        }
    },
    password :{
        type : String,
        required : true,
        minLength : 6,
        trim : true,
        validate( value ) {
            if( value.toLowerCase().includes( 'password' ) ) {
                throw new Error ( 'Password cannot contain "password"' )
            }
        }

    },
    age : {
        type : Number,
        default : 0,
        validate( value ) {
            if( value < 0 ) {
                throw new Error( 'Age must be a positive number' )
            }
        }
    }
}

const User = mongoose.model( 'User' , modelUser )

const dataMe = {
    name : ' Eduardo            ',
    email : 'Edu@gmail.com',
    password : 'PASSword1233',
    age : 25
}

const me = new User( dataMe )

me.save()
    .then( () => {
        console.log( me)
    }).catch( ( error ) => {
        console.log( 'Error : ' , error )
    })*/
    
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
    
    const Tasks = mongoose.model( 'Tasks' , modelTasks )
    
    const dataTask = {
        description : '       preparate docs of Miguel         '
    }
    
    const createdTask = new Tasks( dataTask )
    
    createdTask.save()
        .then( () => {
            console.log( createdTask )
        }).catch( ( error ) => {
            console.log( 'Error : ' , error )
        })